function templatePokemonCards(name, url, index) {
  return `
    <article class="card">
      <h3>${index + 1}. ${name}</h3>
      <a href="${url}" target="_blank" rel="noreferrer">${url}</a>
    </article>
  `;
}

