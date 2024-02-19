import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./PokemonCard";

const App = () => {
  const [pokemon1, setPokemon1] = useState("");
  const [pokemon2, setPokemon2] = useState("");

  const randomPokemonId = () => {
    const randomNumber = Math.floor(Math.random() * 1025);
    return randomNumber + 1;
  };

  useEffect(() => {
    const randomNumber = randomPokemonId();
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // <-- Hier wird data geprinted
        setPokemon1(data);
      });
  }, []);

  useEffect(() => {
    const randomNumber = randomPokemonId();
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // <-- Hier wird data geprinted
        setPokemon2(data);
      });
  }, []);

  if (!pokemon1 || !pokemon2) return <div>Loading...</div>;
  // Run useEffect only once on component mount

  return (
    <div className="app">
      <div className="container">
        <PokemonCard pokemon={pokemon1} cardid="1" opponentPokemon={pokemon2} />
      </div>
      <div className="container">
        <PokemonCard pokemon={pokemon2} cardid="2" opponentPokemon={pokemon1} />
      </div>
    </div>
  );
};

export default App;
