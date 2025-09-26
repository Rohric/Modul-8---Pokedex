function renderPokemonCard() {
  let refPokemonCardList = document.getElementById("card");
  refPokemonCardList.innerHTML = "";

  PokemonName.forEach((name, index) => {
    refPokemonCardList.innerHTML += templatePokemonCards(name, index);
  });
}

function getPokemonName() {
  PokemonName = [];
  PokemonDetails.forEach((details, index) => {
    PokemonName[index] = details.name;
  });
}

function getPokemonGeneration() {
    PokemonGeneration = [];
    SpeciesDetails.forEach((species, index) => {
      PokemonGeneration[index] = species.generation.name; 
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
    details.types.forEach((element) => types.push(element.type.name));
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

function showPokemonNumberList() {
  document.getElementById("showPokemonNumberList").innerHTML = pokemonList.length;;
}
