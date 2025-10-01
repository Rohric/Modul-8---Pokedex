let currentSearchPokedex = null;

function renderSearchPokedex(index) {
  currentSearchPokedex = index;

  let overlayRef = document.getElementById('searchOverlay');
  overlayRef.innerHTML = templateSearchPokedex(index);

  overlayRef.classList.remove('d_none');
  document.body.classList.add('overlay_open');

  applySearchOverlayBackdropStyle(index); // Typ-Farbverlauf für Suche setzen
  openSearchPokedexTab('about');          // About als Start
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
