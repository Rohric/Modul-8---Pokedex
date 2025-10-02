
async function searchPokemon() {
  let searchValue = document.getElementById('searchInput').value;
  if (searchValue.length < 3) {
    closeMatches();
    return;
  }
  resetSearchArrays();
  getMatches(searchValue);

  showGlobalLoader();
  await loadSearchDetails();
  await loadSearchSpecies();
  hideGlobalLoader();

  getSearchPokemonName();
  getSearchPokemonImage();
  getSearchPokemonType();
  getSearchPokemonGeneration();

  renderMatches();
}

function closeMatches() {
  showGlobalLoader();
  let refMatches = document.getElementById('searchMatches');
  let refCards = document.getElementById('cards');

  refMatches.classList.add('d_none');
  refMatches.innerHTML = '';
  refCards.classList.remove('d_none');
  showPokemonNumberList()
  hideGlobalLoader();
}

function getMatches(searchValue) {
  let refSearchValue = searchValue;
  Matchets = [];
  PokemonList.forEach((entry, index) => {
    if (entry.name.toLowerCase().includes(refSearchValue)) {
      Matchets.push(index);
    }
  });
  return Matchets;
}
