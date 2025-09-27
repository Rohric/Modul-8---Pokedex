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


// funktion so umbauen das alle geladen werden, durch eine weitere werden dann nur bestimmte ans render übergeben und so weiter, so hab ich weniger probleme mit der search funktion. 
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

  await loadAllPokemon(); // hängt in pokemonList an
  await loadPokemonDetails(); // nur neue Details laden
  await loadPokemonSpecies(); // nur neue Species laden

  getPokemonName(); // nur neue Namen eintragen
  getPokemonImage(); // nur neue Bilder eintragen
  getPokemonType(); // nur neue Typen eintragen
  getPokemonGeneration(); // nur neue Generationen eintragen

  renderPokemonCard(); // komplett neu zeichnen (löscht & baut – aber jetzt ohne Duplikate)
  showPokemonNumberList();
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
