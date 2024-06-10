import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  // Ersetze die state Variable  const [offset, setOffset] = useState(0) von Schritt 1 durch URL basierte state Variable

  const [setNextURL, setNextURL] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);

  // Stelle die HTML reference von loadPokemon vorran und referiere mit url darauf

  // useEffect(() => {
  // async function loadPokemon("https://pokeapi.co/api/v2/pokemon?offset=0") {
  //   try {
  //     const response = await fetch(
  //       "https://pokeapi.co/api/v2/pokemon?offset=0"
  //     );
  //     const data = await response.json();
  //     setPokemon(data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    loadPokemon("https://pokeapi.co/api/v2/pokemon?offset=0");
  }, []);

  async function loadPokemon(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data.results);

      // Füge eine set-Function für Next und Previous URL ein

      setNextURL(data.next);
      setPreviousUrl(data.previous);
    } catch (error) {
      console.log(error);
    }
  }

  // Lösche loadPokemon (Stand1) an dieser Stelle und füge es in das return unten ein

  //   loadPokemon();
  // }, [offset]);

  return (
    <main>
      {/* Verändere das onClick Event von der offset- hin zur URL Komponente 

      vorher :  onClick={() => setOffset(offset - 20)}  disabled={offset === 0}
                onClick={() => setOffset(offset + 20)} */}

      <button
        type="button"
        onClick={() => loadPokemon(previousUrl)}
        disabled={!previousUrl}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => loadPokemon(nextUrl)}
        disabled={!nextUrl}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
