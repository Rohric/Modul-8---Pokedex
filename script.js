let pokemonList = [];
let offset = 0;
let limit = 7;
let globalResponse = [];

let PokemonDetails = [];
let PokemonName = [];
let PokemonImage = [];
let PokemonType = [];

let SpeciesDetails = [];
let PokemonGeneration = [];

async function init() {
  await loadAllPokemon();
  await loadPokemonDetails();
  await loadPokemonSpecies();
  getPokemonName();
  getPokemonImage();
  getPokemonType();
  getPokemonGeneration();
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
  await loadPokemonSpecies();
  getPokemonName();
  getPokemonImage();
  getPokemonType();
  getPokemonGeneration();
  renderPokemonCard(pokemonList);
  showPokemonNumberList();

  console.log(pokemonList);
  return pokemonList;
}

async function loadPokemonDetails() {
  PokemonDetails = [];
  for (let index = 0; index < pokemonList.length; index++) {
    let refDetails = await fetch(pokemonList[index].url);
    let details = await refDetails.json();
    PokemonDetails[index] = details;
  }
}

async function loadPokemonSpecies() {
  SpeciesDetails = [];
  for (let index = 0; index < PokemonDetails.length; index++) {
    let refSpecies = await fetch(PokemonDetails[index].species.url);
    let species = await refSpecies.json();
    SpeciesDetails[index] = species;
  }
}

console.log(pokemonList);
