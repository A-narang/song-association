import React, { createContext, useState } from "react";

// Create the context
export const SelectedSongContext = createContext();

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
