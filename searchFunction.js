// Globaler Namens-Index (wird einmal geladen)
let AllPokemonIndex = null;

async function loadSearch() {
  if (AllPokemonIndex) return; // bereits geladen
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0");
  let json = await response.json();
  AllPokemonIndex = json.results; // [{ name, url }, ...]
}

// Kürzer: Nur Input, Early-Return, Matches ermitteln – Rest macht showMatches
async function searchPokemon() {
  let searchInput = document.getElementById('searchInput').value;
  let searchValue = searchInput.toLowerCase();

  // Weniger als 3 Zeichen -> normale Anzeige
  if (searchValue.length < 3) {
    return;
  }
  await loadSearch();

  // Treffer im globalen Index finden
  //TODO Make filter to forEach
  let matches = AllPokemonIndex.filter(index =>
    index.name.includes(searchValue)
  );

  // Delegation
  await showMatches(matches);
}

async function showMatches(matches) {
  // Globals für Suchansicht neu aufbauen
  pokemonList = matches;
  PokemonDetails = [];
  SpeciesDetails = [];
  PokemonName = [];
  PokemonImage = [];
  PokemonType = [];
  PokemonGeneration = [];

  // Details & Species für die Treffer laden (nutzt deine bestehenden Loader)
  await loadPokemonDetails();
  await loadPokemonSpecies();

  // Abgeleitete Arrays füllen (deine bestehenden Getter)
  getPokemonName();
  getPokemonImage();
  getPokemonType();
  getPokemonGeneration();

  // Rendern
  renderPokemonCard();
  showPokemonNumberList();
}