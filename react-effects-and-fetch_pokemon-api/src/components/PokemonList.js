import { useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  async function loadPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemon(data.results);
    } catch (error) {
      console.log(error);
    }
  }

// Einbau des useEffect hook um Pokemon automatisch beim Seitenladen zu fetchen 
// mit leeren Dependency array 

useEffect(() => {

  loadPokemon();

}), []); 

  return (
    <main>

{/* Rauslöschen des Button der durch useEffect hook ersetzt wird  */}
    {/* //   <button type="button" onClick={loadPokemon}>
    //     Load Pokémon
    //   </button> */}

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
