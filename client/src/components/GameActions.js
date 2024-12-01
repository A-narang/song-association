import React, { useState, useEffect, useContext } from "react";
import { getWord, newWord, guessSong } from "../services/gameService.js";
import { SelectedSongContext } from "../gameContext.jsx";

/**
 * Component that handles the actions of the Song Association Game.
 * This component allows the player to submit a guess for a song based on a word,
 * skip to a new word, and displays feedback on the guess.
 * It uses the SelectedSongContext to retrieve the selected song title and artist.
 *
 * @component
 */
const GameActions = () => {
  const [word, setWord] = useState("");
  const [message, setMessage] = useState("");

  const {
    selectedSongTitle,
    setSelectedSongTitle,
    selectedSongArtist,
    setSelectedSongArtist,
  } = useContext(SelectedSongContext);

  useEffect(() => {
    const fetchWord = async () => {
      const data = await getWord();
      setWord(data.word);
    };
    fetchWord();
  }, []);

  /**
   * Handles the submit action for guessing the song.
   * When the user submits their guess, it checks if the selected song is valid
   * and sends the guess to the backend. Displays a message based on the result.
   * Then fetches a new word for the next round.
   *
   * @param {Object} e - The event object for the form submission.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedSongTitle && selectedSongArtist) {
      const data = await guessSong(selectedSongArtist, selectedSongTitle);
      setMessage(data.message);
      const newWordData = await newWord();
      setWord(newWordData.word);
      setSelectedSongArtist("");
      setSelectedSongTitle("");
    } else {
      setMessage("Please select a song first.");
    }
  };

  /**
   * Handles the skip action, which fetches a new word without submitting a guess.
   *
   * @param {Object} e - The event object for the form submission.
   */
  const handleSkip = async (e) => {
    e.preventDefault();
    const newWordData = await newWord();
    setWord(newWordData.word);
    setMessage("");
    setSelectedSongArtist("");
    setSelectedSongTitle("");
  };

  return (
    <div className="game">
      <h1>Song Association Game</h1>
      <p>
        Word: <strong>{word}</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSkip}>
        <button type="submit">Skip</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default GameActions;
