import React, { useState, useEffect, useContext } from "react";
import { SelectedSongContext } from "../gameContext.jsx";

/**
 * Component that displays the currently selected song and its artist.
 * This component uses the SelectedSongContext to access the selected song details
 * (title and artist) and displays them on the screen.
 * If no song is selected, a message prompting the user to select a song is displayed.
 *
 * @component
 */
const DisplaySelectedSong = () => {
  const { selectedSongTitle, selectedSongArtist } =
    useContext(SelectedSongContext);

  return (
    <div className="selected-song">
      <p>Selected Song</p>
      {selectedSongTitle && selectedSongArtist ? (
        <div>
          <p>
            Selected Song: <strong>{selectedSongTitle}</strong> by{" "}
            <strong>{selectedSongArtist}</strong>
          </p>
        </div>
      ) : (
        <p>Select a song.</p>
      )}
    </div>
  );
};

export default DisplaySelectedSong;
