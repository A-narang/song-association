import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import gameRoutes from "./routes/gameRoutes.js";
import suggestionRoutes from "./routes/suggestionRoutes.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

/**
 * Routes for the game functionality.
 * All routes starting with '/game' will be handled by gameRoutes.
 */
app.use("/game", gameRoutes);

/**
 * Routes for the song suggestion functionality.
 * All routes starting with '/suggest' will be handled by suggestionRoutes.
 */
app.use("/suggest", suggestionRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
