import axios from "axios";

/**
 * LyricsService is responsible for fetching song lyrics from an external lyrics API.
 */
class LyricsService {
  constructor() {
    this.baseUrl = "https://api.lyrics.ovh/v1";
  }

  /**
   * Fetches the lyrics for a song with the given artist and title.
   *
   * @param {string} artist - The artist of the song.
   * @param {string} title - The title of the song.
   * @returns {Promise<string>} The lyrics of the song.
   * @throws {Error} If the lyrics cannot be fetched or an error occurs.
   */
  async getLyrics(artist, title) {
    try {
      const response = await axios.get(`${this.baseUrl}/${artist}/${title}`);
      return response.data.lyrics;
    } catch (error) {
      throw new Error("Unable to fetch lyrics. Please try again.");
    }
  }
}

export default LyricsService;
