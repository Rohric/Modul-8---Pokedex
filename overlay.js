 

function openPokedex(index) {
  currentPokedex = index;
  renderGlobalOverlay()
  fillPokedex(index);
  let refOverlay = document.getElementById('globalOverlay'); 
  refOverlay.classList.remove('d_none');
  document.body.classList.add('overlay_open'); 
}

function closePokedex() {
  currentPokedex = null;
  let refOverlay = document.getElementById("globalOverlay");
  refOverlay.classList.add('d_none');
  document.body.classList.remove('overlay_open');
}

function fillPokedex(index) {
  // get Name from Pokemon
  document.getElementById('pokedexName').textContent = PokemonName[index];
  
  //get Image from Pokemon
  document.getElementById('pokedexImage').innerHTML = `
  <img src="${PokemonImage[index]}" alt="${PokemonName[index]}">`;
  
  // get Types from Pokemon
  document.getElementById('pokedexTypes').innerHTML =
    getPokemonTypeBadges(index);
  
    // get Generations from Pokemon
  document.getElementById('pokedexGeneration').textContent =
    PokemonGeneration[index];
    // get ID from Pokemon
    document.getElementById('pokedexId').textContent = 'ID: ' + getPokemonId(index);
}




