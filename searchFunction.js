// === Search-Storage (separat von den Haupt-Arrays) ===
let Matchets = [];

let SearchDetails = [];
let SearchSpecies = [];
let SearchName = [];
let SearchImage = [];
let SearchType = [];
let SearchGeneration = [];

// Nur die Treffer-INDIZES aus dem globalen Index ermitteln
function getMatches(searchValue) {
  let refSearchValue = searchValue.trim().toLowerCase();
  Matchets = [];
  PokemonList.forEach((entry, index) => {
    if (entry.name.toLowerCase().includes(refSearchValue)) {
      Matchets.push(index);
    }
  });
  return Matchets;
}

// Daten für die Treffer laden – NUR in die Search-Arrays schreiben
async function loadSearchData() {
  SearchDetails = [];
  SearchSpecies = [];
  SearchName = [];
  SearchImage = [];
  SearchType = [];
  SearchGeneration = [];

  // Details
  for (let k = 0; k < Matchets.length; k++) {
    let i = Matchets[k];
    let res = await fetch(PokemonList[i].url);
    let det = await res.json();
    SearchDetails.push(det);
  }

  // Species
  for (let k = 0; k < SearchDetails.length; k++) {
    let res = await fetch(SearchDetails[k].species.url);
    let spec = await res.json();
    SearchSpecies.push(spec);
  }

  // Search-Getter
  SearchDetails.forEach((details, idx) => {
    SearchName[idx] = details.name;
    SearchImage[idx] = details.sprites.other["official-artwork"].front_default;

    let types = [];
    details.types.forEach((entry) => types.push(entry.type.name));
    SearchType[idx] = types;
  });

  SearchSpecies.forEach((species, idx) => {
    SearchGeneration[idx] = species.generation.name;
  });
}

// Adapter-Template für die Suche: gleiches Markup, zeigt aber auf Search-Arrays
function templatePokemonCardsSearch(name, index) {
  let badges = "";
  SearchType[index].forEach((typeName) => {
    badges += `<span class="badge type_${typeName}">${typeName}</span>`;
  });

  return `
    <article class="card">
      <h3>${index + 1}. ${name}</h3>
      <div class="types">${badges}</div>
      <div class="generation">${SearchGeneration[index]}</div>
      <div><img src="${SearchImage[index]}" alt="${name}"></div>
    </article>
  `;
}


// Such-Rendering (nutzt NUR Search-Arrays, Globals bleiben unberührt)
async function renderMatches() {
  // Ansicht umschalten
  document.getElementById('cards').classList.add('d_none');
  let refMatches = document.getElementById('searchMatches');
  refMatches.classList.remove('d_none');
  refMatches.innerHTML = '';

  // Karten aus Search-Arrays zeichnen
  SearchName.forEach((name, index) => {
    refMatches.innerHTML += templatePokemonCardsSearch(name, index);
  });

  // Trefferanzahl anzeigen (optional)
  let info = document.getElementById('showPokemonNumberList');
  if (info) info.innerText = SearchName.length;
}

// Such-Controller: Input → Matches → Daten laden → rendern
async function searchPokemon() {
  let searchValue = document.getElementById('searchInput').value;
  if (searchValue.trim().length < 3) {
    closeMatches();
    return;
  }
  getMatches(searchValue);
  await loadSearchData();
  await renderMatches();
}

// Zurück zur normalen Liste (Haupt-Arrays & Pagination bleiben intakt)
function closeMatches() {
  document.getElementById('searchMatches').classList.add('d_none');
  document.getElementById('searchMatches').innerHTML = '';
  document.getElementById('cards').classList.remove('d_none');
  // optional: Zahl wieder auf die normale Anzeige setzen
  // document.getElementById('showPokemonNumberList').innerText = ShownCards;
}
