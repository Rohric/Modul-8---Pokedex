
async function loadPokemon() {
  let response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  let responseAsJson = await response.json();
  const pokemon = responseAsJson.results;

  renderPokemon(pokemon);
}

loadPokemon();

