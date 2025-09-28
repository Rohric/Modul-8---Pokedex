function getPokemonName() {
  PokemonName = [];
  PokemonDetails.forEach((details, index) => {
    PokemonName[index] = details.name;
  });
}

function getPokemonImage() {
  PokemonImage = [];
  PokemonDetails.forEach((details, index) => {
    PokemonImage[index] =
      details.sprites.other["official-artwork"].front_default;
  });
}

function getPokemonType() {
  PokemonType = [];
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
  PokemonGeneration = [];
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

// need this loading function, else index error in DevTools
function refPokemonStats(){
getPokemonStat(index, "hp");
getPokemonStat(index, "attack");
getPokemonStat(index, "speed");
getPokemonStat(index, "defense");
}



// call in templatePokemonCards
function getPokemonBackgroundStyle(index) {
  let types = PokemonType[index]; // zb ["grass"] oder ["grass","poison"]

  if (types.length === 1) {
    let type = types[0];
    return `background: var(--type-${type});`;
  }

  // Smooth-Blend (schöne Mischung)
  let firstType = types[0];
  let secondType = types[1];
  return `background: linear-gradient(135deg, var(--type-${firstType}) 0%, var(--type-${secondType}) 100%);`;
}
