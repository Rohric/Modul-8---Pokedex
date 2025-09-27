function renderOnePokemonCard(index) {
  let refPokemonCard = document.getElementById("cards");
  let name = PokemonName[index];
  refPokemonCard.innerHTML += templatePokemonCards(name, index);
}

function renderAllPokemonCards() {
  let ref = document.getElementById("cards");
  ref.innerHTML = "";

  for (
    let index = 0;
    index < ShownCards && index < PokemonList.length;
    index++
  ) {
    renderOnePokemonCard(index);
  }
}
