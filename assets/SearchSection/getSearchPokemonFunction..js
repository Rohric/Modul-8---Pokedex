function getSearchPokemonId(index) {
    return SearchDetails[index].id;
  }
  
  function getSearchPokemonStat(index, statName) {
    let value = 0;
    SearchDetails[index].stats.forEach((statEntry) => {
      if (statEntry.stat.name === statName) value = statEntry.base_stat;
    });
    return value;
  }
  
  function getSearchPokemonHeight(index) {
    // PokeAPI: height in decimetern
    let dm = SearchDetails[index].height;
    return (dm / 10).toFixed(1) + " m";
  }
  
  function getSearchPokemonWeight(index) {
    // PokeAPI: weight in hectograms
    let hg = SearchDetails[index].weight;
    return (hg / 10).toFixed(1) + " kg";
  }
  
  function getSearchPokemonFlavorText(index) {
    // aus SearchSpecies[index].flavor_text_entries -> englisch, erster passender
    let entries = SearchSpecies[index].flavor_text_entries;
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].language.name === "en") {
        // Steuerzeichen/Zeilenumbrüche säubern
        return entries[i].flavor_text.replace(/\f/g, " ").replace(/\n/g, " ");
      }
    }
    return "";
  }
  
  function getSearchPokemonTypeBadges(index) {
    let html = "";
    SearchType[index].forEach((t) => {
      html += `<span class="badge type_${t}">${t}</span>`;
    });
    return html;
  }
  