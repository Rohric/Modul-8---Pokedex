function renderPokemonCard() {
  let refPokemonCardList = document.getElementById("card");
  refPokemonCardList.innerHTML = "";

  PokemonName.forEach((name, index) => {
    refPokemonCardList.innerHTML += templatePokemonCards(name, index);
  });
}

function getPokemonName(startIndex = 0) {
  PokemonDetails.slice(startIndex).forEach((pokemonDetail, index) => {
    let globalIndex = startIndex + index;
    PokemonName[globalIndex] = pokemonDetail.name;
  });
}

function getPokemonImage(startIndex = 0) {
  PokemonDetails.slice(startIndex).forEach((pokemonDetail, index) => {
    let globalIndex = startIndex + index;
    PokemonImage[globalIndex] =
      pokemonDetail.sprites.other["official-artwork"].front_default;
  });
}

function getPokemonType(startIndex = 0) {
  PokemonDetails.slice(startIndex).forEach((pokemonDetail, index) => {
    let globalIndex = startIndex + index;
    let typeNames = [];
    pokemonDetail.types.forEach((typeEntry) => {
      typeNames.push(typeEntry.type.name);
    });
    PokemonType[globalIndex] = typeNames;
  });
}

function getPokemonGeneration(startIndex = 0) {
  SpeciesDetails.slice(startIndex).forEach((speciesDetail, index) => {
    let globalIndex = startIndex + index;
    PokemonGeneration[globalIndex] = speciesDetail.generation.name;
  });
}


function getPokemonTypeBadges(index) {
  let html = "";
  PokemonType[index].forEach((typeName) => {
    html += `<span class="badge type_${typeName}">${typeName}</span>`;
  });
  return html;
}

function showPokemonNumberList() {
  document.getElementById("showPokemonNumberList").innerHTML = pokemonList.length;;
}
