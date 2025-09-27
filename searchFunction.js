

let Matches = [];

// Suche ab 3 Zeichen → #cards verstecken, #searchMatches zeigen
async function searchPokemon() {
  let searchValue = document.getElementById('searchInput').value;

  if (searchValue.length >= 3) {
    document.getElementById('cards').classList.add('d_none');
    document.getElementById('searchMatches').classList.remove('d_none');
  } else {
    closeMatches();
  }
}

// Normale Liste wieder zeigen
async function closeMatches() {
  document.getElementById('searchMatches').classList.add('d_none');
  document.getElementById('cards').classList.remove('d_none');
}

// Erwartet: global let Matches = [];

function getMatches(searchValue) {
  let refSearchValue = searchValue.trim().toLowerCase();
  Matches = [];
  PokemonList.forEach((entry, index) => {
    if (entry.name.toLowerCase().includes(refSearchValue)) {
      Matches.push(index);
    }
  });
  return Matches;
}

async function renderMatches() {
  // Ansicht umschalten
  document.getElementById('cards').classList.add('d_none');
  document.getElementById('searchMatches').classList.remove('d_none');
  document.getElementById('searchMatches').innerHTML = '';

  // Details/Species für die Treffer laden (direkt in deine Globals)
  for (let k = 0; k < Matches.length; k++) {
    let i = Matches[k];
    if (!PokemonDetails[i]) {
      let res = await fetch(PokemonList[i].url);
      PokemonDetails[i] = await res.json();
    }
  }
  for (let k = 0; k < Matches.length; k++) {
    let i = Matches[k];
    if (!SpeciesDetails[i]) {
      let res = await fetch(PokemonDetails[i].species.url);
      SpeciesDetails[i] = await res.json();
    }
  }

  // Getter aktualisieren
  getPokemonName();
  getPokemonImage();
  getPokemonType();
  getPokemonGeneration();

  // Treffer mit DEINEM Template rendern
  Matches.forEach((i) => {
    document.getElementById('searchMatches').innerHTML += templatePokemonCards(PokemonName[i], i);
  });

  // Anzahl anzeigen
  document.getElementById('showPokemonNumberList').innerText = Matches.length;
}

// Beispiel-Einbindung im Input-Handler:
function searchPokemon() {
  let searchValue = document.getElementById('searchInput').value;
  if (searchValue.trim().length < 3) {
    closeMatches();
    return;
  }
  getMatches(searchValue);
  renderMatches();
}

// zurück zur normalen Ansicht
function closeMatches() {
  document.getElementById('searchMatches').classList.add('d_none');
  document.getElementById('searchMatches').innerHTML = '';
  document.getElementById('cards').classList.remove('d_none');
}
