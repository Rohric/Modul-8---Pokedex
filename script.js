let PokemonList = [];

let PokemonDetails = [];
let PokemonName = [];
let PokemonImage = [];
let PokemonType = [];

let SpeciesDetails = [];
let PokemonGeneration = [];

async function init() {
  await loadAllPokemon();
  await loadPokemonDetails(7);
  await loadPokemonSpecies(7);
  getPokemonName();
  getPokemonImage();
  getPokemonType();
  getPokemonGeneration();

  renderAllPokemonCards(7)
}

// === Daten laden (kompletter Index einmalig) ===
async function loadAllPokemon() {
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0`
  );
  const json = await response.json();
  PokemonList = json.results; // [{name, url}, ...]
  console.log(PokemonList);
}

// ---------- Minimal-Loader (Details/Species) ----------
// Lädt Pokémon-Details für die ersten N Einträge (z. B. 7 fürs erste Rendern)
async function loadPokemonDetails(count) {
  for (let index = PokemonDetails.length; index < count; index++) {
    const res = await fetch(PokemonList[index].url);
    PokemonDetails[index] = await res.json();
  }
}

// Lädt Species-Daten für die ersten N Einträge
async function loadPokemonSpecies(count) {
  for (let index = SpeciesDetails.length; index < count; index++) {
    const res = await fetch(PokemonDetails[index].species.url);
    SpeciesDetails[index] = await res.json();
  }
}

//==============================
// ---------- Getter (füllen deine abgeleiteten Arrays) ----------
function getPokemonName() {
  PokemonName = [];
  PokemonDetails.forEach((details, index) => {
    PokemonName[index] = details.name;
  });
}

function getPokemonImage() {
  PokemonImage = [];
  PokemonDetails.forEach((details, index) => {
    PokemonImage[index] =
      details.sprites.other["official-artwork"].front_default;
  });
}

function getPokemonType() {
  PokemonType = [];
  PokemonDetails.forEach((details, index) => {
    let types = [];
    details.types.forEach((entry) => {
      types.push(entry.type.name);
    });
    PokemonType[index] = types;
  });
}

function getPokemonGeneration() {
  PokemonGeneration = [];
  SpeciesDetails.forEach((species, index) => {
    PokemonGeneration[index] = species.generation.name;
  });
}

function showPokemonNumberList() {
  document.getElementById("showPokemonNumberList").innerHTML =
    PokemonList.length;
}

// === Template: EINE Karte ===
function templatePokemonCards(name, index) {
  return `
    <article class="card">
      <h3>${index + 1}. ${name}</h3>
      <div class="types">${getPokemonTypeBadges(index)}</div>
      <div class="generation">${PokemonGeneration[index]}</div>
      <div><img src="${PokemonImage[index]}" alt="${name}"></div>
    </article>
  `;
}

// (Optional) Badge-HTML aus Typen bauen – falls noch nicht vorhanden
function getPokemonTypeBadges(index) {
  let html = "";
  PokemonType[index].forEach((typeName) => {
    html += `<span class="badge type_${typeName}">${typeName}</span>`;
  });
  return html;
}

// === Render: eine Karte anhängen ===
function renderOnePokemonCard(index) {
  let ref = document.getElementById("cards"); // passe ggf. auf "card" an
  let name = PokemonName[index]; // Getter füllen diese vorher
  ref.innerHTML += templatePokemonCards(name, index);
}

// === Render: die ersten 'count' Karten ===
function renderAllPokemonCards(count) {
  let ref = document.getElementById("cards");
  ref.innerHTML = "";

  let rendered = 0;
  PokemonList.forEach((entry, index) => {
    if (index < count) {
      ref.innerHTML += templatePokemonCards(PokemonName[index], index);
      rendered++;
    }
  });

  // wenn du die Anzahl irgendwo anzeigen willst:
  // document.getElementById("showPokemonNumberList").innerText = rendered;
}
