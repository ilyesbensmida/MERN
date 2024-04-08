import React, { useState, useEffect } from 'react';

const FetchPokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchPokemon = async () => {
    setIsLoading(true);
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=807');
    const data = await response.json();
    setPokemonList(data.results.map(pokemon => pokemon.name));
    setIsLoading(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

return (
  <div>
    {isLoading && <div className="loader">Chargement...</div>}
    {isSuccess && <div className="success-message">Data fetch successful. Enjoy the list of Pokemon!</div>}
    <button onClick={fetchPokemon}>Fetch Pokemon</button>
    {pokemonList.length > 0 && (
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    )}
  </div>
);
};

export default FetchPokemon;
