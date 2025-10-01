

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
