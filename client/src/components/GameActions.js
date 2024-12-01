import React, { useState, useEffect, useContext } from "react";
import { getWord, newWord, guessSong } from "../services/gameService.js";
import { SelectedSongContext } from "../gameContext.jsx";

const GameActions = () => {
  const [word, setWord] = useState("");
  const [message, setMessage] = useState("");

  const { selectedSongTitle, selectedSongArtist } =
    useContext(SelectedSongContext);

  useEffect(() => {
    const fetchWord = async () => {
      const data = await getWord();
      setWord(data.word);
    };
    fetchWord();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedSongTitle && selectedSongArtist) {
      console.log(selectedSongTitle)
      console.log(selectedSongArtist)
      const data = await guessSong(selectedSongArtist, selectedSongTitle);
      console.log("guessed song");
      console.log(data);
      setMessage(data.message);
      const newWordData = await newWord();
      setWord(newWordData.word);
    } else {
      setMessage("Please select a song first.");
    }
  };

  const handleSkip = async (e) => {
    e.preventDefault();
    const newWordData = await newWord();
    setWord(newWordData.word);
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
