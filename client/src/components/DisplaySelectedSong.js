import React, { useState, useEffect, useContext } from "react";
import { SelectedSongContext } from "../gameContext.jsx";

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
