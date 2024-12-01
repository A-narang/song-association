/**
 * Base URL for the game API
 * @constant {string}
 */
const API_URL = "http://localhost:4000/game";

/**
 * Fetches the current word from the game.
 * GET request to the /getword endpoint of the API.
 *
 * @returns {Promise<Object>} The JSON response containing the current word.
 */
export const getWord = async () => {
  const response = await fetch(`${API_URL}/getword`);
  return response.json();
};

/**
 * Fetches a new random word from the game.
 * GET request to the /newword endpoint of the API.
 *
 * @returns {Promise<Object>} The JSON response containing the new random word.
 */
export const newWord = async () => {
  const response = await fetch(`${API_URL}/newword`);
  return response.json();
};

/**
 * Submits a song guess with the artist and title.
 * POST request to the /guess endpoint of the API, passing the artist and title in the body.
 *
 * @param {string} artist - The artist of the song.
 * @param {string} title - The title of the song.
 * @returns {Promise<Object>} The JSON response indicating whether the guess was correct or not.
 */
export const guessSong = async (artist, title) => {
  const response = await fetch(`${API_URL}/guess`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ artist, title }),
  });
  return response.json();
};
