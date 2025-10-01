async function loadAllPokemon() {
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0`
  );
  let json = await response.json();
  PokemonList = json.results; // [{name, url}, ...]
  console.log(PokemonList);
}

async function loadMoreCards() {
  ShownCards = ShownCards + 7;

  await loadPokemonDetails(ShownCards);
  await loadPokemonSpecies(ShownCards);

  getPokemonName();
  getPokemonImage();
  getPokemonType();
  getPokemonGeneration();

  // neu rendern
  renderAllPokemonCards(ShownCards);
  showPokemonNumberList()
}

async function loadPokemonDetails(count) {
  for (let index = PokemonDetails.length; index < count; index++) {
    let response = await fetch(PokemonList[index].url);
    PokemonDetails[index] = await response.json();
  }
}

async function loadPokemonSpecies(count) {
  for (let index = SpeciesDetails.length; index < count; index++) {
    let response = await fetch(PokemonDetails[index].species.url);
    SpeciesDetails[index] = await response.json();
  }
}
