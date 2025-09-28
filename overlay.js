function openPokedex(index) {
  currentPokedex = index;
  renderGlobalOverlay();
  applyOverlayBackdropStyle(index)
  fillPokedex(index);
  
  let refOverlay = document.getElementById("globalOverlay");
  refOverlay.classList.remove("d_none");
  document.body.classList.add("overlay_open");
}

function closePokedex() {
  currentPokedex = null;
  let refOverlay = document.getElementById("globalOverlay");
  refOverlay.classList.add("d_none");
  document.body.classList.remove("overlay_open");
}

function fillPokedex(index) {
  // get Name from Pokemon
  document.getElementById("pokedexName").textContent = PokemonName[index];

  //get Image from Pokemon
  document.getElementById("pokedexImage").innerHTML = `
  <img src="${PokemonImage[index]}" alt="${PokemonName[index]}">`;

  // get Types from Pokemon
  document.getElementById("pokedexTypes").innerHTML =
    getPokemonTypeBadges(index);

  // get Generations from Pokemon
  document.getElementById("pokedexGeneration").textContent =
    PokemonGeneration[index];
  // get ID from Pokemon neu!!!
  document.getElementById("pokedexId").textContent =
    "ID: " + getPokemonId(index);
  document.getElementById("pokedexHP").textContent =
    "HP: " + getPokemonStat(index, "hp");
  document.getElementById("pokedexAttack").textContent =
    "attack: " + getPokemonStat(index, "attack");
  document.getElementById("pokedexDefense").textContent =
    "defense: " + getPokemonStat(index, "defense");
  document.getElementById("pokedexSpeed").textContent =
    "speed: " + getPokemonStat(index, "speed");
}


function applyOverlayBackdropStyle(index) {
  let refOverlay = document.getElementById('globalOverlay');
  let types = PokemonType[index];
  let value =
    types.length === 1
      ? `var(--type-${types[0]})`
      : `linear-gradient(135deg, var(--type-${types[0]}) 0%, var(--type-${types[1]}) 100%)`;
  refOverlay.style.setProperty('--overlay-backdrop', value);
}
