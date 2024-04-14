import React, { useState, useEffect } from 'react';

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);

  // Function to fetch Pokemon data
  const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=807');
    const data = await response.json();
    setPokemonNames(data.results.map(pokemon => pokemon.name));
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonNames.length > 0 &&
          pokemonNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
