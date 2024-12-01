import express from "express";
import {
  getWord,
  newWord,
  guessSong,
} from "../controllers/songAssociationController.js";

const router = express.Router();

/**
 * Route to get the current word for the song association game.
 * Endpoint: GET /getword
 * Controller: getWord
 */
router.get("/getword", getWord);

/**
 * Route to generate a new random word for the song association game.
 * Endpoint: GET /newword
 * Controller: newWord
 */
router.get("/newword", newWord);

/**
 * Route to validate the user's song guess against the current word.
 * Endpoint: POST /guess
 * Controller: guessSong
 * Expects request body to include:
 * - artist: The artist of the guessed song
 * - title: The title of the guessed song
 */
router.post("/guess", guessSong);

export default router;
