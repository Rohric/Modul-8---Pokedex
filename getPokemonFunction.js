// ---------- Getter (füllen deine abgeleiteten Arrays) ----------
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

