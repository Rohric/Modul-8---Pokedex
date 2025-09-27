// Globaler Namens-Index (wird einmal geladen)
let AllPokemonIndex = null;
let matches = [];


async function loadSearch() {
  if (AllPokemonIndex) return; // bereits geladen
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0");
  let json = await response.json();
  AllPokemonIndex = json.results; // [{ name, url }, ...]
}

async function searchPokemon() {
    let searchInput = document.getElementById('searchInput').value;
    let searchValue = searchInput.trim().toLowerCase();
  
    // erst ab 4 Zeichen suchen
    if (searchValue.length <= 2) {
      closeMatches();
      return;
    }
  
    // globalen Namens-Index einmalig laden (setzt AllPokemonIndex)
    await loadSearch();
  
    // Trefferliste (alle Namen enthalten bereits URLs)
    let matches = [];
    for (let entry of AllPokemonIndex) {
      if (entry.name.toLowerCase().includes(searchValue)) {
        matches.push(entry);
      }
    }
  
    // nur Treffer rendern (nutzt deine vorhandene showMatches)
    await showMatches(matches);
  }

  async function showMatches(matches) {
    // Lokale Daten laden (Globals NICHT anfassen)
    const LocalDetails = [];
    const LocalSpecies = [];
  
    for (let i = 0; i < matches.length; i++) {
      const res = await fetch(matches[i].url);
      LocalDetails[i] = await res.json();
    }
    for (let i = 0; i < LocalDetails.length; i++) {
      const res = await fetch(LocalDetails[i].species.url);
      LocalSpecies[i] = await res.json();
    }
  
    // Mit deinem (lokalen) Template rendern
    const ref = document.getElementById('card');
    ref.innerHTML = "";
  
    for (let i = 0; i < LocalDetails.length; i++) {
      const d = LocalDetails[i];
      const s = LocalSpecies[i];
  
      const name       = d.name;
      const imageUrl   = d.sprites.other["official-artwork"].front_default;
      const typesArray = d.types.map(t => t.type.name);
      const generation = s.generation.name;
  
      ref.innerHTML += templatePokemonCardsLocal(name, imageUrl, typesArray, generation, i);
    }
  
    // Trefferanzahl anzeigen (lokal)
    document.getElementById("showPokemonNumberList").innerHTML = LocalDetails.length;
  }
  

function closeMatches() {
    // zurück zu deiner normalen Seite (Pagination bleibt unberührt)
    renderPokemonCard();
    showPokemonNumberList();
  }