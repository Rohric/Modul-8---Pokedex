function templatePokemonCards(name,index) {
  const img = PokemonImage[index];
  return `
    <article class="card">
      <h3>${index + 1}. ${name}</h3>
    <div>
      <img src="${img}" alt="${name}" loading="lazy">
    </div>
    </article>
  `;
}

