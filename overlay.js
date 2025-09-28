 

function openPokedex(index) {
  currentPokedex = index;
  fillPokedex(index);
  let refOverlay = document.getElementById('overlay'); 
  refOverlay.classList.remove('d_none');
  document.body.classList.add('overlay_open'); 

}

function closePokedex() {
  currentPokedex = null;
  let refOverlay = document.getElementById("overlay");
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
}




function openMatchPokedex(index) {
  currentPokedex = index;
  fillMatchPokedex(index);
  let refOverlay = document.getElementById('overlay'); 
  refOverlay.classList.remove('d_none');
  document.body.classList.add('overlay_open'); 

}

function closeMatchPokedex() {
  currentPokedex = null;
  let refOverlay = document.getElementById("overlay");
  refOverlay.classList.add('d_none');
  document.body.classList.remove('overlay_open');
}

function fillMatchPokedex(index) {
  // get Name from Pokemon
  document.getElementById('pokedexName').textContent = SearchName[index];
  
  //get Image from Pokemon
  document.getElementById('pokedexImage').innerHTML = `
  <img src="${SearchImage[index]}" alt="${SearchName[index]}">`;
  
  // get Types from Pokemon
  document.getElementById('pokedexTypes').innerHTML =
    getPokemonTypeBadges(index);
  
    // get Generations from Pokemon
  document.getElementById('pokedexGeneration').textContent =
    PokemonGeneration[index];
}
