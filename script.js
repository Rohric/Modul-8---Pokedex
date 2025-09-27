let PokemonList = [];

let PokemonDetails = [];
let PokemonName = [];
let PokemonImage = [];
let PokemonType = [];

let SpeciesDetails = [];
let PokemonGeneration = [];

let ShownCards = 7;

async function init() {
  await loadAllPokemon();                
  await loadPokemonDetails(ShownCards);
  await loadPokemonSpecies(ShownCards);

  getPokemonName();
  getPokemonImage();
  getPokemonType();
  getPokemonGeneration();

  renderAllPokemonCards(ShownCards);
  showPokemonNumberList()
}

function showPokemonNumberList() {
  document.getElementById("showPokemonNumberList").innerText = ShownCards;

}


