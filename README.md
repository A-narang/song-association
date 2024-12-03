# song-association
 
Welcome to the Song Association Game! This project is a web-based implementation of the popular word-association game where players are given a random word and must name or guess a song containing that word.

## Features

- Generate random words for gameplay.
- Verify if a song title and artist contains the given word using a lyrics API.
- Provide real-time song suggestions as the player types a song name.

## Technologies Used

### Frontend

- React.js: For building the interactive UI.

### Backend

- Node.js: Server-side JavaScript runtime.

- Express.js: Backend framework for handling routes and middleware.

- Lyrics API: Fetch lyrics, get song suggestions, and validate user input.

### Other Tools

- npm: Package manager for managing dependencies.

- random-words: Generate random words for gameplay.

- CORS & Body-Parser: Middleware for API requests.

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
cd ../server
npm start
```

5. Start the frontend development server:

```
cd ../client
npm start
```

6. Access the app at http://localhost:3000 in your browser.
