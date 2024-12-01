import SongSuggestionService from "../services/songSuggestionService.js";

const songSuggestionService = new SongSuggestionService();

/**
 * Fetchs song suggestions based on the user's input query.
 * Sends a list of song suggestions in response.
 *
 * @param {object} req - The request object containing the user's query.
 * @param {object} res - The response object.
 */
export async function getSuggestions(req, res) {
  const { query } = req.body;
  try {
    const suggestions = await songSuggestionService.getSuggestions(query);
    res.json({ suggestions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
