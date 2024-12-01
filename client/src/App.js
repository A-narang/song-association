import React from "react";
import "./App.css";
import GameActions from "../src/components/GameActions.js";
import SongSearch from "./components/SongSearch.js";
import DisplaySelectedSong from "./components/DisplaySelectedSong.js";
import { SelectedSongProvider } from "./gameContext.jsx";

const App = () => {
  return (
    <SelectedSongProvider>
      {""}
      {""}
      <GameActions />
      <SongSearch />
      <DisplaySelectedSong />
    </SelectedSongProvider>
  );
};

export default App;
