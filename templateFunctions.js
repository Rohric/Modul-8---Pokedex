function templatePokemonCards(name,index) {
  let img = PokemonImage[index];
  let type = PokemonType[index];
  return `
    <article class="card">
      <h3>${index + 1}. ${name}</h3>
    <div>
      <img src="${img}" alt="${name}" loading="lazy">
    </div>

    <span>
      <p>${type}</p>
    </span>
    </article>
  `;
}

