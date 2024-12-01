import { generate } from "random-words";

/**
 * Class representing a simple song association game.
 * The game generates a random word and allows the player to guess songs the word is used in.
 */
class SimpleSongAssociation {
  /**
   * Creates a new game of song association.
   * The score is intially set at 0 and a random word is generated for the intital current word.
   */
  constructor() {
    this.currentWord = generate();
  }

  /**
   * Generate a new random word for the player to guess with.
   * @returns {string} the word generated.
   */
  getNewRandomWord() {
    this.currentWord = generate();
    return this.currentWord;
  }

  /**
   * Compares the lyrics with the current word to check if the word is present in the lyrics.
   * If the player guesses correctly, the player's score is incremented.
   * @param {string} lyrics the lyrics of the song the player guessed.
   * @returns {boolean} true if the current word is in the song's lyrics.
   */
  makeGuess(lyrics) {
    return lyrics.toLowerCase().includes(this.currentWord.toLowerCase());
  }
}

export default SimpleSongAssociation;
