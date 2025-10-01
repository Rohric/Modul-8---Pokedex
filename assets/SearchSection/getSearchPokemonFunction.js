// === Search-Getter (spiegeln deine globalen Getter, aber mit Search-Arrays) ===

// Namen füllen: SearchDetails -> SearchName
function getSearchPokemonName() {
  SearchName = [];
  SearchDetails.forEach((details, index) => {
    SearchName[index] = details.name;
  });
}

// Bilder füllen: SearchDetails -> SearchImage
function getSearchPokemonImage() {
  SearchImage = [];
  SearchDetails.forEach((details, index) => {
    SearchImage[index] =
      details.sprites.other["official-artwork"].front_default;
  });
}

// Typen füllen: SearchDetails -> SearchType (Array von Strings pro Pokémon)
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

// Badges-HTML für das Search-Template
function getSearchPokemonTypeBadges(index) {
  let html = "";
  SearchType[index].forEach((typeName) => {
    html += `<span class="badge type_${typeName}">${typeName}</span>`;
  });
  return html;
}

// Generationen füllen: SearchSpecies -> SearchGeneration
function getSearchPokemonGeneration() {
  SearchGeneration = [];
  SearchSpecies.forEach((species, index) => {
    SearchGeneration[index] = species.generation.name;
  });
}

// ID eines Suchtreffers (einfacher Zugriff)
function getSearchPokemonId(index) {
  return SearchDetails[index].id;
}

// Einzelner Stat eines Suchtreffers
function getSearchPokemonStat(index, statName) {
  let value = 0;
  SearchDetails[index].stats.forEach((statEntry) => {
    if (statEntry.stat.name === statName) {
      value = statEntry.base_stat;
    }
  });
  return value; // wichtig für konsistentes Verhalten
}

// Flavor-Text (englisch, erster passender) – wie global, nur mit SearchSpecies
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

// Größe (m) – PokeAPI: height in Decimeter
function getSearchPokemonHeight(index) {
  let pokemonHeight = SearchDetails[index].height; // in dm
  return (pokemonHeight * 0.1).toFixed(1) + " m";
}

// Gewicht (Kg) – PokeAPI: weight in Hectogram
function getSearchPokemonWeight(index) {
  let pokemonWeight = SearchDetails[index].weight; // in hg
  return (pokemonWeight * 0.1).toFixed(1) + " Kg";
}

// Hintergrund-Style für Karten/Buttons im Search-Kontext (wie global)
function getSearchPokemonBackgroundStyle(index) {
  let types = SearchType[index]; // z. B. ["grass"] oder ["grass","poison"]

  if (types.length === 1) {
    let type = types[0];
    return `background: var(--type-${type});`;
  }

  let firstType = types[0];
  let secondType = types[1];
  return `background: linear-gradient(135deg, var(--type-${firstType}) 0%, var(--type-${secondType}) 100%);`;
}
