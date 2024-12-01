import React, { useState, useEffect, useContext } from "react";
import { getSongs } from "../services/suggestionService.js"; // Assuming you saved the above function in songService.js
import { SelectedSongContext } from "../gameContext.jsx";

const SongSearch = () => {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Use the context to get the setters for the selected song
  const { setSelectedSongTitle, setSelectedSongArtist } =
    useContext(SelectedSongContext);

  // Handle the input change and trigger song search
  const handleChange = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery) {
      setLoading(true);
      try {
        const result = await getSongs(searchQuery);
        setSongs(result.suggestions.slice(0, 5) || []);
      } catch (error) {
        console.error("Error fetching songs");
        console.error(error);
        setSongs([]);
      } finally {
        setLoading(false);
      }
    } else {
      setSongs([]);
    }
  };

  const handleSongClick = (title, artist) => {
    setSelectedSongTitle(title);
    setSelectedSongArtist(artist);
    setQuery("");
    setSongs([]);
    console.log("Selected song:", title, artist);
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

      {!loading && songs.length === 0 && query && <p>No songs found.</p>}

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
