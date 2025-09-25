let pokemonList = [];

async function init() {
  await loadAllPokemon();
  renderPokemonCard(pokemonList);
}

async function loadAllPokemon() {
  let globalResponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  let globalResponseAsJson = await globalResponse.json();
  pokemonList = globalResponseAsJson.results;
}



























// reine überprüfung im Console.log

console.log(loadAllPokemon());
