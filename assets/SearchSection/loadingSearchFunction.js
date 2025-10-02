let Matchets = [];

let SearchDetails = [];
let SearchSpecies = [];
let SearchName = [];
let SearchImage = [];
let SearchType = [];
let SearchGeneration = [];

function resetSearchArrays() {
  Matchets = [];
  SearchDetails = [];
  SearchSpecies = [];
  SearchName = [];
  SearchImage = [];
  SearchType = [];
  SearchGeneration = [];
}



async function loadSearchDetails() {
  SearchDetails = [];
  for (let k = 0; k < Matchets.length; k++) {
    let i = Matchets[k];
    let res = await fetch(PokemonList[i].url);
    let det = await res.json();
    SearchDetails.push(det);
  }
}

async function loadSearchSpecies() {
  SearchSpecies = [];
  for (let k = 0; k < SearchDetails.length; k++) {
    let res = await fetch(SearchDetails[k].species.url);
    let spec = await res.json();
    SearchSpecies.push(spec);
  }
}
