function renderOnePokemonCard(index) {
  let refPokemonCard = document.getElementById("cards");
  let name = PokemonName[index];
  refPokemonCard.innerHTML += templatePokemonCards(name, index);
}

function renderAllPokemonCards() {
  let ref = document.getElementById("cards");
  ref.innerHTML = "";

  for (let index = 0; index < ShownCards && index < PokemonList.length; index++) {
    renderOnePokemonCard(index);
  }
}

function renderPokedex(index) {
  currentPokedex = index;

  let overlayRef = document.getElementById('globalOverlay');
  overlayRef.innerHTML = templatePokedex(index);

  overlayRef.classList.remove('d_none');
  document.body.classList.add('overlay_open');

  applyOverlayBackdropStyle(index);
  openPokedexTab('about');           
}
