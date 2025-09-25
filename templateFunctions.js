function templatePokemonCards(name, index) {
  return `
    <article class="card">
      <h3>${index + 1}. ${name}</h3>
      <div class="types">${getPokemonTypeBadges(index)}</div>
    <div>  <div class="generation">${PokemonGeneration[index]}</div></div>
      <div><img src="${PokemonImage[index]}" alt="${name}" loading="lazy"></div>
    </article>
  `;
}


