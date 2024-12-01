import React, { useState, useEffect, useContext } from "react";
import { getSongs } from "../services/suggestionService.js"; // Assuming you saved the above function in songService.js
import { SelectedSongContext } from "../gameContext.jsx";

/**
 * Component that allows the user to search for songs based on a query.
 * It fetches song suggestions from an external service and displays them in a list.
 * When a song is selected, the song title and artist are saved in the context to be used elsewhere in the app.
 *
 * @component
 */
const SongSearch = () => {
  const [query, setQuery] = useState(""); // Search query entered by the user
  const [songs, setSongs] = useState([]); // List of songs

  const { setSelectedSongTitle, setSelectedSongArtist } =
    useContext(SelectedSongContext);

  /**
   * Handles the input change and triggers a song search based on the query.
   * If there is a search query, it fetches the song suggestions.
   * Otherwise, it clears the song suggestions.
   *
   * @param {Object} e - The event object triggered by the input change.
   */
  const handleChange = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    if (searchQuery) {
      try {
        const result = await getSongs(searchQuery);
        setSongs(result.suggestions.slice(0, 5) || []);
      } catch (error) {
        console.error("Error fetching songs");
        console.error(error);
        setSongs([]);
      }
    } else {
      setSongs([]);
    }
  };

  /**
   * Handles the song selection when a user clicks on a song suggestion.
   * Updates the selected song title and artist in the context, and clears search results.
   *
   * @param {string} title - The title of the selected song.
   * @param {string} artist - The artist of the selected song.
   */
  const handleSongClick = (title, artist) => {
    setSelectedSongTitle(title);
    setSelectedSongArtist(artist);
    setQuery("");
    setSongs([]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a song..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      {/* Display a message when no songs are found */}
      {songs.length === 0 && query && <p>No songs found.</p>}

      {/* Display the song suggestions in a list when songs are available */}
      {Array.isArray(songs) && songs.length > 0 && (
        <ul className="suggestions-list">
          {songs.map((song) => (
            <li
              key={song.id}
              className="suggestion-item"
              onClick={() => handleSongClick(song.title, song.artist.name)}
              style={{ cursor: "pointer" }}
            >
              <div className="song-info">
                <img src={song.album.cover_medium} alt={song.title} />
                <div className="song-details">
                  <p>{song.title}</p>
                  <p>{song.artist.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongSearch;
