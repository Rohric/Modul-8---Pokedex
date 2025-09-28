// === Search-Storage (getrennt von den Haupt-Arrays) ===
let Matchets = [];

let SearchDetails = [];
let SearchSpecies = [];
let SearchName = [];
let SearchImage = [];
let SearchType = [];
let SearchGeneration = [];


/* ===========================
   1) Controller
   =========================== */

// Input → Matches → Laden → Getter → View-Switch → Render
async function searchPokemon() {
  let searchValue = document.getElementById('searchInput').value;
  if (searchValue.length < 3) {
    closeMatches();
    showPokemonNumberList()
    return;
  }

  getMatches(searchValue);
  await resetSearchArrays();
  await loadSearchDetails();
  await loadSearchSpecies();
  getSearchName();
  getSearchImage();
  getSearchType();
  getSearchGeneration();
  showSearchView();
  renderMatches();
}

// Zurück zur normalen Ansicht (normale Liste bleibt unberührt)
function closeMatches() {
  hideSearchView();
  clearSearchResultsView();
  showNormalView();
}


/* ===========================
   2) View-Umschalter
   =========================== */

function showSearchView() {
  document.getElementById('cards').classList.add('d_none');
  document.getElementById('searchMatches').classList.remove('d_none');
}

function hideSearchView() {
  document.getElementById('searchMatches').classList.add('d_none');
}

function clearSearchResultsView() {
  document.getElementById('searchMatches').innerHTML = '';
}

function showNormalView() {
  document.getElementById('cards').classList.remove('d_none');
}


/* ===========================
   3) Matches ermitteln
   =========================== */

function getMatches(searchValue) {
  let refSearchValue = searchValue.toLowerCase();
  Matchets = [];
  PokemonList.forEach((entry, index) => {
    if (entry.name.toLowerCase().includes(refSearchValue)) {
      Matchets.push(index);
    }
  });
  return Matchets;
}


/* ===========================
   4) Laden (nur Search-Arrays)
   =========================== */

async function resetSearchArrays() {
  SearchDetails = [];
  SearchSpecies = [];
  SearchName = [];
  SearchImage = [];
  SearchType = [];
  SearchGeneration = [];
}

async function loadSearchDetails() {
  for (let k = 0; k < Matchets.length; k++) {
    let i = Matchets[k];
    let res = await fetch(PokemonList[i].url);
    SearchDetails[k] = await res.json();
  }
}

async function loadSearchSpecies() {
  for (let k = 0; k < SearchDetails.length; k++) {
    let res = await fetch(SearchDetails[k].species.url);
    SearchSpecies[k] = await res.json();
  }
}


/* ===========================
   5) Getter (nur Search-Arrays)
   =========================== */

function getSearchName() {
  SearchDetails.forEach((details, idx) => {
    SearchName[idx] = details.name;
  });
}

function getSearchImage() {
  SearchDetails.forEach((details, idx) => {
    SearchImage[idx] = details.sprites.other["official-artwork"].front_default;
  });
}

function getSearchType() {
  SearchDetails.forEach((details, idx) => {
    let types = [];
    details.types.forEach((entry) => types.push(entry.type.name));
    SearchType[idx] = types;
  });
}

function getSearchGeneration() {
  SearchSpecies.forEach((species, idx) => {
    SearchGeneration[idx] = species.generation.name;
  });
}


/* ===========================
   6) Render (nur Search-Ansicht)
   =========================== */

// Adapter-Template für die Search-Arrays (gleiches Markup, eigene Datenquelle)
function templatePokemonCardsSearch(name, index) {
  let badges = "";
  SearchType[index].forEach((typeName) => {
    badges += `<span class="badge type_${typeName}">${typeName}</span>`;
  });

  return `
    <article class="card">
      <h3>${index + 1}. ${name}</h3>
      <button class="open_overlay" onclick="openMatchPokedex(${index})">Info Table</button>
      <div class="pokedex_id">ID: ${getSearchPokemonId(index)}</div>
      <div class="types">${badges}</div>
      <div class="generation">${SearchGeneration[index]}</div>
      <div><img src="${SearchImage[index]}" alt="${name}"></div>
    </article>
  `;
}

function getSearchPokemonId(index) {
  return SearchDetails[index].id;
}

function renderMatches() {
  let refMatches = document.getElementById('searchMatches');
  refMatches.innerHTML = '';
  SearchName.forEach((name, index) => {
    refMatches.innerHTML += templatePokemonCardsSearch(name, index);
  });

  let info = document.getElementById('showPokemonNumberList');
  if (info) info.innerText = SearchName.length;
}


function openMatchPokedex(index) {
  currentPokedex = index;
  fillMatchPokedex(index);
  let refOverlay = document.getElementById('searchOverlay'); 
  refOverlay.classList.remove('d_none');
  document.body.classList.add('overlay_open'); 

}

function closeMatchPokedex() {
  currentPokedex = null;
  let refOverlay = document.getElementById("searchOverlay");
  refOverlay.classList.add('d_none');
  document.body.classList.remove('overlay_open');

}

function fillMatchPokedex(index) {
  // get Name from Pokemon
  document.getElementById('searchPokedexName').textContent = SearchName[index];
  
  //get Image from Pokemon
  document.getElementById('searchPokedexImage').innerHTML = `
  <img src="${SearchImage[index]}" alt="${SearchName[index]}">`;
  
  // get Types from Pokemon
  document.getElementById('searchPokedexTypes').innerHTML =
    getPokemonTypeBadges(index);
  
    // get Generations from Pokemon
  document.getElementById('searchPokedexGeneration').textContent =
    PokemonGeneration[index];
}
