function templatePokemonCards(name, index) {
  return `
    <article class="card">
      <h3>${index + 1}. ${name}</h3>
      <button 
      class="open_overlay" 
      onclick="openPokedex(${index})"
      >Info Table
      </button>
      <div class="types">${getPokemonTypeBadges(index)}</div>
      <div class="generation">${PokemonGeneration[index]}</div>
      <div><img src="${PokemonImage[index]}" alt="${name}"></div>
    </article>
  `;
}