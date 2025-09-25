let pokemonList = [];
let offset = 0;
let limit = 7;

async function init() {
  await loadAllPokemon();
  showPokemonNumberList()
  renderPokemonCard(pokemonList);
}

async function loadMore() {
  await loadAllPokemon();
  renderPokemonCard(pokemonList);
  console.log(pokemonList);
  showPokemonNumberList()
  return pokemonList;
}

async function loadAllPokemon() {
  let globalResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  let globalResponseAsJson = await globalResponse.json();

  globalResponseAsJson.results.forEach((element) => {
    pokemonList.push(element);
  });

  offset += limit;
}

// reine überprüfung im Console.log

console.log(pokemonList);
