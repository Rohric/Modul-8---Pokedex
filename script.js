let PokemonList = [];

let PokemonDetails = [];
let PokemonName = [];
let PokemonImage = [];
let PokemonType = [];

let SpeciesDetails = [];
let PokemonGeneration = [];

let ShownCards = 7;

async function init() {
  showGlobalLoader();
  await waitForNextAnimationFrame();  

  try {
    await loadAllPokemon();
    await loadPokemonDetails(ShownCards);
    await loadPokemonSpecies(ShownCards);
  } finally {
  }

  getPokemonName();
  getPokemonImage();
  getPokemonType();
  getPokemonGeneration();

  renderAllPokemonCards(ShownCards);
  showPokemonNumberList();

  hideGlobalLoader();
}



function showPokemonNumberList() {
  document.getElementById("showPokemonNumberList").innerText =
    "Pokémons: " + ShownCards + " / " + PokemonList.length;
}


function waitForNextAnimationFrame() {
  return new Promise((resolveNextFrame) => {
    window.requestAnimationFrame(() => resolveNextFrame());
  });
}
