# Poke React App

This project is a simple React application built with TypeScript, using Vite as the build tool. It allows users to fetch and display a list of Pokémon from the PokeAPI. Users can specify the number of Pokémon fetched via an input box, and the application supports fetching through both button click and "Enter" key press. There is also a loading indicator and error handling for a better user experience.

## Features

- Fetch a configurable number of Pokémon from the PokeAPI.
- Loading spinner indicating when data is being fetched.
- Error message display when the API request fails.
- Responsive UI with hover effects on list items.
- Supports Enter key for input submissions.

## Getting Started

### Prerequisites

- Ensure you have Node.js and npm installed. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/brent-cohen/pokemon-list.git
   cd pokemon-list
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Development Server

To launch the development server and view the application in your local environment, use:

```sh
npm run dev
```

This will start the Vite development server, usually on `http://localhost:5173/`, but refer to the terminal output for the exact URL.


## API Used

This application uses the [PokeAPI](https://pokeapi.co/), a comprehensive resource for Pokémon data. The app specifically accesses the Pokémon endpoint to fetch lists of Pokémon names.

## Error Handling

Errors that occur during API requests (such as network errors or invalid response codes) are gracefully handled. If an error occurs, an error message is displayed to the user below the Pokémon list.

## Folder Structure

```plaintext
/poke-app
  /src
    /components
      /PokemonList
        index.tsx
        style.css
    /services
      api.ts
    /types
      index.ts
    App.tsx
    App.css
    index.css
    main.tsx
    vite-env.d.ts
  eslint.config.js
  index.html
  package.json
  tsconfig.app.json
  tsconfig.json
  README.md
  tsconfig.node.json
  vite.config.ts
```

## Assumptions

- It is assumed that the user will enter valid numeric input in the input box.
- Given the application's demo nature, more sophisticated error handling and additional features may be further developed beyond basic fetch capabilities.