import express from "express";
import { getSuggestions } from "../controllers/songSuggestionController.js";

const router = express.Router();

/**
 * Route to fetch song suggestions based on a user's query.
 * Endpoint: POST /songs
 * Controller: getSuggestions
 * Expects request body to include:
 * - query: The search term for song suggestions
 * Responds with:
 * - An array of song suggestions matching the query
 */
router.post("/songs", getSuggestions);

export default router;
