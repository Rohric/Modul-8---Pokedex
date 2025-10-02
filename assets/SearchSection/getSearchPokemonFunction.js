
function getSearchPokemonName() {
  SearchName = [];
  SearchDetails.forEach((details, index) => {
    SearchName[index] = details.name;
  });
}

function getSearchPokemonImage() {
  SearchImage = [];
  SearchDetails.forEach((details, index) => {
    SearchImage[index] =
      details.sprites.other["official-artwork"].front_default;
  });
}

function getSearchPokemonType() {
  SearchType = [];
  SearchDetails.forEach((details, index) => {
    let types = [];
    details.types.forEach((entry) => {
      types.push(entry.type.name);
    });
    SearchType[index] = types;
  });
}

function getSearchPokemonTypeBadges(index) {
  let html = "";
  SearchType[index].forEach((typeName) => {
    html += `<span class="badge type_${typeName}">${typeName}</span>`;
  });
  return html;
}

function getSearchPokemonGeneration() {
  SearchGeneration = [];
  SearchSpecies.forEach((species, index) => {
    SearchGeneration[index] = species.generation.name;
  });
}

function getSearchPokemonId(index) {
  return SearchDetails[index].id;
}

function getSearchPokemonStat(index, statName) {
  let value = 0;
  SearchDetails[index].stats.forEach((statEntry) => {
    if (statEntry.stat.name === statName) {
      value = statEntry.base_stat;
    }
  });
  return value; //// important else is value undifinded
}

function getSearchPokemonFlavorText(index) {
  let text = "";
  let list = SearchSpecies[index].flavor_text_entries;

  list.forEach((flavorEntry) => {
    if (!text && flavorEntry.language.name === "en") {
      text = flavorEntry.flavor_text.replace(/[\n\f\r]/g, " ");
    }
  });

  return text;
}

function getSearchPokemonHeight(index) {
  let pokemonHeight = SearchDetails[index].height; 
  return (pokemonHeight * 0.1).toFixed(1) + " m";
}

function getSearchPokemonWeight(index) {
  let pokemonWeight = SearchDetails[index].weight; 
  return (pokemonWeight * 0.1).toFixed(1) + " Kg";
}

function getSearchPokemonBackgroundStyle(index) {
  let types = SearchType[index]; // zb ["grass"] oder ["grass","poison"]

  if (types.length === 1) {
    let type = types[0];
    return `background: var(--type-${type});`;
  }

  let firstType = types[0];
  let secondType = types[1];
  return `background: linear-gradient(135deg, var(--type-${firstType}) 0%, var(--type-${secondType}) 100%);`;
}
