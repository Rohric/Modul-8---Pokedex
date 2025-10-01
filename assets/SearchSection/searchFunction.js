// searchFunction.js

// Such-Controller (Input → Matches → Daten laden → Ableitungen → Render)
async function searchPokemon() {
  let searchValue = document.getElementById('searchInput').value;

  // erst ab 3 Zeichen suchen
  if (searchValue.length < 3) {
    closeMatches();
    return;
  }

  // alles für die Suche zurücksetzen
  resetSearchArrays();

  // Treffer-Indizes aus globalem Index ermitteln
  getMatches(searchValue);

  // Detail- & Species-Daten für Treffer laden
  await loadSearchDetails();
  await loadSearchSpecies();

  // WICHTIG: abgeleitete Arrays jetzt füllen (wie global – nur Search-Varianten)
  getSearchPokemonName();
  getSearchPokemonImage();
  getSearchPokemonType();
  getSearchPokemonGeneration();

  // Treffer rendern
  renderMatches();
}

// Zurück zur normalen Ansicht
function closeMatches() {
  let refMatches = document.getElementById('searchMatches');
  let refCards = document.getElementById('cards');

  refMatches.classList.add('d_none');
  refMatches.innerHTML = '';
  refCards.classList.remove('d_none');
  showPokemonNumberList()
}

// Treffer-Indizes im globalen Index ermitteln (lass das hier, wenn du es so sortiert hast)
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
