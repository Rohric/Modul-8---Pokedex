function openSearchPokedexTab(which) {
  let about = document.getElementById('searchPokedexAbout');
  let stats = document.getElementById('searchPokedexStats');
  let tabAbout = document.getElementById('searchTabAbout');
  let tabStats = document.getElementById('searchTabStats');

  if (which === 'about') {
    about.classList.remove('d_none');
    stats.classList.add('d_none');
    tabAbout.classList.add('is_active');
    tabStats.classList.remove('is_active');
  } else {
    stats.classList.remove('d_none');
    about.classList.add('d_none');
    tabStats.classList.add('is_active');
    tabAbout.classList.remove('is_active');
  }
}

function applySearchOverlayBackdropStyle(index) {
  let overlayRef = document.getElementById('searchOverlay');
  let types = SearchType[index];

  let value =
    types.length === 1
      ? `var(--type-${types[0]})`
      : `linear-gradient(135deg, var(--type-${types[0]}) 0%, var(--type-${types[1]}) 100%)`;

  overlayRef.style.setProperty('--overlay-backdrop', value);
}

function prevSearchPokedex() {
  currentSearchPokedex = (currentSearchPokedex - 1 + SearchName.length) % SearchName.length;
  renderSearchPokedex(currentSearchPokedex);
}

function nextSearchPokedex() {
  currentSearchPokedex = (currentSearchPokedex + 1) % SearchName.length;
  renderSearchPokedex(currentSearchPokedex);
}
