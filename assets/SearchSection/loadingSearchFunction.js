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
