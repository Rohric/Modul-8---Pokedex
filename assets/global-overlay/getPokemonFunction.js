function getPokemonName() {
  PokemonDetails.forEach((details, index) => {
    PokemonName[index] = details.name;
  });
}

function getPokemonImage() {
  PokemonDetails.forEach((details, index) => {
    PokemonImage[index] =
      details.sprites.other["official-artwork"].front_default;
  });
}

function getPokemonType() {
  PokemonDetails.forEach((details, index) => {
    let types = [];
    details.types.forEach((entry) => {
      types.push(entry.type.name);
    });
    PokemonType[index] = types;
  });
}

function getPokemonTypeBadges(index) {
  let html = "";
  PokemonType[index].forEach((typeName) => {
    html += `<span class="badge type_${typeName}">${typeName}</span>`;
  });
  return html;
}

function getPokemonGeneration() {
  SpeciesDetails.forEach((species, index) => {
    PokemonGeneration[index] = species.generation.name;
  });
}

function getPokemonId(index) {
  return PokemonDetails[index].id;
}

function getPokemonStat(index, statName) {
  let value = 0;
  PokemonDetails[index].stats.forEach((statEntry) => {
    if (statEntry.stat.name === statName) {
      value = statEntry.base_stat;
    }
  });
  return value; // important else is all undifinded
}

// Head hurts Description from Pokemon
function getPokemonFlavorText(index) {
  let text = "";
  let list = SpeciesDetails[index].flavor_text_entries;

  list.forEach((flavorEntry) => {
    if (!text && flavorEntry.language.name === "en") {
      text = flavorEntry.flavor_text.replace(/[\n\f\r]/g, " ");
    }
  });

  return text;
}

// PokemonHeight in Meter
function getPokemonHeight(index) {
  let PokemonHeight = PokemonDetails[index].height; // wert in dezimeter
  return (PokemonHeight * 0.1).toFixed(1) + " m";
}

// PokemonWeight in KG
function getPokemonWeight(index) {
  let PokemonWeight = PokemonDetails[index].weight;
  return (PokemonWeight * 0.1).toFixed(1) + " Kg";
}

// for templatePokemonCards
function getPokemonBackgroundStyle(index) {
  let types = PokemonType[index]; // zb ["grass"] oder ["grass","poison"]

  if (types.length === 1) {
    let type = types[0];
    return `background: var(--type-${type});`;
  }

  let firstType = types[0];
  let secondType = types[1];
  return `background: linear-gradient(135deg, var(--type-${firstType}) 0%, var(--type-${secondType}) 100%);`;
}
