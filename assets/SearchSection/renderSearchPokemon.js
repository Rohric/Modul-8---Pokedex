let currentSearchPokedex = null;

async function renderMatches() {
  let refCards = document.getElementById('cards');
  let refMatches = document.getElementById('searchMatches');
  refCards.classList.add('d_none');
  refMatches.classList.remove('d_none');
  refMatches.innerHTML = '';

  SearchName.forEach((name, index) => {
    refMatches.innerHTML += templatePokemonCardsSearch(name, index);
  });

  let info = document.getElementById('showPokemonNumberList');
  if (info) info.innerText = SearchName.length;
}

function renderSearchPokedex(index) {
  currentSearchPokedex = index;

  let overlayRef = document.getElementById('searchOverlay');
  overlayRef.innerHTML = templateSearchPokedex(index);

  overlayRef.classList.remove('d_none');
  document.body.classList.add('overlay_open');

  applySearchOverlayBackdropStyle(index);
  openSearchPokedexTab('about');
}

function openSearchPokedex(index) {
  renderSearchPokedex(index);
}

function closeSearchPokedex() {
  currentSearchPokedex = null;
  let overlayRef = document.getElementById('searchOverlay');
  overlayRef.classList.add('d_none');
  document.body.classList.remove('overlay_open');
}
