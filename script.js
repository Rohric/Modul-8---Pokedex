let pokemonList = [];
let offset = 0;
let limit = 7;
let globalResponse = [];

let PokemonDetails = [];
let PokemonName = [];
let PokemonImage = [];
let PokemonType = [];

async function init() {
  await loadAllPokemon();
  await loadPokemonDetails()
  getPokemonName(); 
  getPokemonImage();
  showPokemonNumberList();
  renderPokemonCard();
}

async function loadAllPokemon() {
  globalResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  let globalResponseAsJson = await globalResponse.json();

  globalResponseAsJson.results.forEach((element) => {
    pokemonList.push(element);
  });

  offset += limit;
}

async function loadMoreCards() {
  await loadAllPokemon();
  await loadPokemonDetails();
  getPokemonName();  
  getPokemonImage();
  renderPokemonCard(pokemonList);
  showPokemonNumberList();

  console.log(pokemonList);
  return pokemonList;
}

async function loadPokemonDetails() {
  PokemonDetails = [];
  for (let i = 0; i < pokemonList.length; i++) {
    let refDetails = await fetch(pokemonList[i].url);
    let details = await refDetails.json();
    PokemonDetails[i] = details; 
  }
}

console.log(pokemonList);
