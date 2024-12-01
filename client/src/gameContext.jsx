import React, { createContext, useState } from "react";

export const SelectedSongContext = createContext();

/**
 * Provider component that wraps the application to provide selected song data
 * and update functions to the rest of the components.
 */
export const SelectedSongProvider = ({ children }) => {
  const [selectedSongTitle, setSelectedSongTitle] = useState(null);
  const [selectedSongArtist, setSelectedSongArtist] = useState(null);

  return (
    <SelectedSongContext.Provider
      value={{
        selectedSongTitle,
        setSelectedSongTitle,
        selectedSongArtist,
        setSelectedSongArtist,
      }}
    >
      {children}
    </SelectedSongContext.Provider>
  );
};

export default SelectedSongProvider; // Default export for the provider
