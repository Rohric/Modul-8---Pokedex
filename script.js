let pokemonList = [];
let offset = 0;
let limit = 7;

let PokemonDetails = [];
let PokemonName = [];
let PokemonImage = [];
let PokemonType = [];

let SpeciesDetails = [];
let PokemonGeneration = [];
let currentPokedex = null;

async function init() {
  await loadAllPokemon();
  await loadPokemonDetails();
  await loadPokemonSpecies();
  // Abgeleitete Arrays füllen
  getPokemonName(); // ab 0
  getPokemonImage();
  getPokemonType();
  getPokemonGeneration();

  // Erst jetzt rendern
  renderPokemonCard();
  showPokemonNumberList();
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

async function loadMoreCards() {
  let startIndex = pokemonList.length; // ab hier kommen neue Einträge

  await loadAllPokemon(); // hängt in pokemonList an
  await loadPokemonDetails(startIndex); // nur neue Details laden
  await loadPokemonSpecies(startIndex); // nur neue Species laden

  getPokemonName(); // nur neue Namen eintragen
  getPokemonImage(); // nur neue Bilder eintragen
  getPokemonType(); // nur neue Typen eintragen
  getPokemonGeneration(); // nur neue Generationen eintragen

  renderPokemonCard(); // komplett neu zeichnen (löscht & baut – aber jetzt ohne Duplikate)
  showPokemonNumberList();
}

// Neu: optionaler startIndex, default 0
async function loadPokemonDetails(startIndex = 0) {
  for (let index = startIndex; index < pokemonList.length; index++) {
    const res = await fetch(pokemonList[index].url);
    const details = await res.json();
    PokemonDetails[index] = details;
  }
}

async function loadPokemonSpecies(startIndex = 0) {
  for (let index = startIndex; index < PokemonDetails.length; index++) {
    const res = await fetch(PokemonDetails[index].species.url);
    const species = await res.json();
    SpeciesDetails[index] = species;
  }
}

console.log(pokemonList);
