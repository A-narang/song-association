# song-association
 
Welcome to the Song Association Game! This project is a web-based implementation of the popular word-association game where players are given a random word and must name or guess a song containing that word.

## Features

- Generate random words for gameplay.
- Verify if a song title and artist contains the given word using a lyrics API.
- Provide real-time song suggestions as the player types a song name.

## Technologies Used

### Frontend

- **React.js**: For building the interactive UI.
- **CSS**: Styling components and creating a responsive design.

### Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Backend framework for handling routes and middleware.
- **Lyrics API**: Fetch lyrics, get song suggestions, and validate user input.

### Other Tools

- **npm**: Package manager for managing dependencies.
- **random-words**: Generate random words for gameplay.
- **CORS & Body-Parser**: Middleware for API requests.

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone the repository:

```
git clone https://github.com/A-narang/song-association.git
```

2. Navigate to the project directory:

```
cd song-association-game
```

3. Install dependencies for both the client and server:

```
cd client
npm install
cd ../server
npm install
```

### Running the Application

4. Start the backend server:

```
npm start
```

5. Start the frontend development server:

```
cd ../client
npm start
```

6. Access the app at http://localhost:3000 in your browser.

## API Endpoints

### Game Routes

- GET /game/getword: Get the current word for the game.
- GET /game/newword: Generate a new random word.
- POST /game/guess: Validate if the user's song choice contains the word.

### Suggestion Routes

- POST /suggest/songs: Fetch song suggestions based on a search query.

## Project Structure 
```
song-association
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── DisplaySelectedSong.js
│   │   │   ├── GameActions.js
│   │   │   └── SongSearch.js
│   │   ├── services
│   │   │   ├── GameService.js
│   │   │   └── SuggestionService.js
│   │   ├── App.js
│   │   └── index.js
├── server
│   ├── controllers
│   │   ├── songAssociationController.js
│   │   └── songSuggestionController.js
│   ├── models
│   │   └── simpleSongAssociation.js
│   ├── routes
│   │   ├── gameRoutes.js
│   │   └── suggestionRoutes.js
│   ├── services
│   │   ├── lyricsService.js
│   │   └── songSuggestionService.js
│   └── index.js
```
## Future Enhancements

- Add user authentication and scores leaderboard.
- Improve the UI with animations and themes.
- Expand game rules for additional challenges.
- Enhance error handling for better UX.
  
## Acknowledgements

- Lyrics.ovh API
- npm random-words

##

Thank you for checking out my project! 
