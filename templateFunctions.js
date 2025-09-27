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
    <div>  <div class="generation">${PokemonGeneration[index]}</div></div>
      <div><img src="${PokemonImage[index]}" alt="${name}" loading="lazy"></div>
    </article>
  `;
}


// Nutzt dein Markup (Badges + Generation + Bild), aber mit lokalen Werten
function templatePokemonCardsLocal(name, imageUrl, typesArray, generationName, index){
  const typesHtml = typesArray
    .map(t => `<span class="badge type_${t}">${t}</span>`)
    .join("");

  return `
        <button 
      class="open_overlay" 
      onclick="openPokedex(${index})"
      >Info Table
      </button>
      
    <article class="card">
      <h3>${index + 1}. ${name}</h3>
      <div class="types">${typesHtml}</div>
      <div class="generation">${generationName}</div>
      <div><img src="${imageUrl}" alt="${name}" loading="lazy"></div>
    </article>
  `;
}

