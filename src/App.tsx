import React from 'react';
import PokemonList from './components/PokemonList';
import "./App.css"

const App: React.FC = () => {
  return (
    <div className='app'>
      <PokemonList />
    </div>
  );
};

export default App;