async function searchPokemon() {
  let searchValue = document.getElementById('searchInput').value;
  let trimmed = searchValue.trim();

  if (trimmed.length < 3) {
    closeMatches();
    return;
  }

  resetSearchArrays();
  getMatches(trimmed);
  await loadSearchDetails();
  await loadSearchSpecies();
  getSearchPokemonName();
getSearchPokemonImage();
getSearchPokemonType();
getSearchPokemonGeneration();


  renderMatches();
}

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