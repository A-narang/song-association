/**
 * Base URL for the song suggestion API
 * @constant {string}
 */
const API_URL = "http://localhost:4000/suggest";

/**
 * Fetches song suggestions based on a search query.
 * POST request to the /songs endpoint of the API, passes the search query in the body.
 *
 * @param {string} query - The search query to suggest songs for.
 * @returns {Promise<Object>} The JSON response containing the song suggestions based on the query.
 */
export const getSongs = async (query) => {
  const response = await fetch(`${API_URL}/songs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  return response.json();
};
