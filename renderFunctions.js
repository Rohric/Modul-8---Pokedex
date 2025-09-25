function renderPokemonCard(pokemonList) {
  let refPokemonCardList = document.getElementById("card");
  refPokemonCardList.innerHTML = "";

  pokemonList.forEach((element, index) => {
    refPokemonCardList.innerHTML += templatePokemonCards(element, index);
  });
}

function getPokemonName() {
  let refPokemonName = document.getElementById("pokemonName");
  refPokemonName.innerHTML = "";
  PokemonDetails.forEach((element, index) => {
    refPokemonName.innerHTML = PokemonDetails;
  });
}

function showPokemonNumberList() {
  document.getElementById("showPokemonNumberList").innerHTML = offset;
}
