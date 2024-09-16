import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState({});

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!response.ok) throw new Error("Failed to fetch pokemon list");
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonList();
  }, []);

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        const abilitiesPromises = pokemonList.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          if (!response.ok) throw new Error(`Failed to fetch abilities for ${pokemon.name}`);
          const data = await response.json();
          const abilities = data.abilities.map((item) => item.ability.name).join(", ");
          return { name: pokemon.name, abilities };
        });

        const abilitiesData = await Promise.all(abilitiesPromises);
        const abilitiesMap = abilitiesData.reduce((acc, { name, abilities }) => {
          acc[name] = abilities;
          return acc;
        }, {});

        setPokemonAbilities(abilitiesMap);
      } catch (error) {
        console.error(error);
      }
    };

    if (pokemonList.length) {
      fetchAbilities();
    }
  }, [pokemonList]);

  return (
    <>
      <table className="tableDecorator">
        <thead>
          <tr>
            <th>Pokemon Name</th>
            <th>Pokemon Abilities</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList.map((pokemon) => (
            <tr key={pokemon.name}>
              <td>{pokemon.name}</td>
              <td>{pokemonAbilities[pokemon.name] || "Loading..."}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Pokemon;

