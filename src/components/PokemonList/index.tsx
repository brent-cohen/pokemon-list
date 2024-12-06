import React, { useState } from 'react';
import { fetchPokemons } from '../../services/api';
import { Pokemon } from '../../types';
import './style.css';

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [count, setCount] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetch = async () => {
    setLoading(true);
    setError(null);  // Reset error before making a new request
    const data = await fetchPokemons(count);
    if (data) {
      setPokemons(data.results);
    } else {
      setError('Failed to fetch Pokemon data. Please try again.');
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleFetch();
    }
  };

  return (
    <div className="container">
      <div className="inputContainer">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleFetch}>Fetch</button>
      </div>
      {loading && <div className="spinner">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <ul className="list">
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;