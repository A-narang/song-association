import SimpleSongAssociation from "../models/simpleSongAssociation.js";
import LyricsService from "../services/lyricsService.js";

const game = new SimpleSongAssociation();
const lyricsService = new LyricsService();

/**
 * Gets the current word in the game.
 * Responds with the word currently being used in the game.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
export function getWord(req, res) {
  const word = game.currentWord;
  res.json({ word });
}

/**
 * Generates a new random word for the game.
 * Responds with the newly generated word.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
export function newWord(req, res) {
  const word = game.getNewRandomWord();
  res.json({ word });
}

/**
 * Processes the user's song guess.
 * Takes the artist and song title from the request body,
 * fetches the song's lyrics, and checks if the current game word
 * appears in the lyrics. Responds with the result of the guess.
 *
 * @param {object} req - The request object containing the user's guess (artist and title).
 * @param {object} res - The response object.
 */
export async function guessSong(req, res) {
  const { artist, title } = req.body;
  try {
    const lyrics = await lyricsService.getLyrics(artist, title);
    const isValid = game.makeGuess(lyrics);
    res.json({
      success: isValid,
      result: isValid,
      message: isValid
        ? "Correct! The word is in the song."
        : "Incorrect. The word is not in the song.",
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "An error occurred." });
  }
}
