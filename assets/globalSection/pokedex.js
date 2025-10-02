function openPokedex(index) {
  renderPokedex(index);
}

function closePokedex() {
  currentPokedex = null;
  let refOverlay = document.getElementById("globalOverlay");
  refOverlay.classList.add("d_none");
  document.body.classList.remove("overlay_open");
}

function openPokedexTab(which) {
  let about = document.getElementById('pokedexAbout');
  let stats = document.getElementById('pokedexStats');
  let tabAbout = document.getElementById('tabAbout');
  let tabStats = document.getElementById('tabStats');

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

function prevPokedex() {
  currentPokedex = (currentPokedex - 1 + PokemonName.length) % PokemonName.length;
  renderPokedex(currentPokedex);           
}

function nextPokedex() {
  currentPokedex = (currentPokedex + 1) % PokemonName.length;
  renderPokedex(currentPokedex);            
}
