import axios from "axios";

/**
 * SongSuggestionService handles fetching song suggestions from the API.
 */
class SongSuggestionService {
  constructor() {
    this.baseUrl = "https://api.lyrics.ovh/suggest";
  }

  /**
   * Finds songs similar to the given song name.

   * @param {string} query the song's name to search for suggestions.
   * @returns {Promise<Array>} A list of song suggestions based on the query.
   * @throws {Error} If an error occurs during the request.
   */
  async getSuggestions(query) {
    try {
      const response = await axios.get(`${this.baseUrl}/${query}`);
      return response.data.data;
    } catch (error) {
      throw new Error("Unable to fetch song suggestions. Please try again.");
    }
  }
}

export default SongSuggestionService;
