function templatePokemonCards(name, index) {
  return `
    <article class="card">
      <h3>${getPokemonId(index)}. ${name}</h3>
      <button 
      class="open_overlay" 
      onclick="openPokedex(${index})"
      >Info Table
      </button>

      <div class="pokedex_id">PokeDex-ID: ${getPokemonId(index)}</div>

      <div class="types">${getPokemonTypeBadges(index)}</div>
      <div class="generation">${PokemonGeneration[index]}</div>
      <div class="card" style="${getCardBackgroundStyle(index)}"><img src="${PokemonImage[index]}" alt="${name}"></div>
    </article>
  `;
}


function templateGlobalOverlay(){
  return `
    <div class="overlay_backdrop"></div>

    <article class="pokedex">
      <header class="pokedex_header">
        <h3 id="pokedexName" class="pokedex_name"></h3>
        <button onclick="closePokedex()" class="pokedex_close">--X--</button>
      </header>

      <section class="pokedex_body">
        <div id="pokedexImage" class="pokedex_image"></div>
        <div id="pokedexTypes" class="pokedex_types"></div>

        <div id="pokedexId" class="pokedex_id"></div>
        <div id="pokedexHP" class="pokedex_stat"></div>
        <div id="pokedexAttack" class="pokedex_stat"></div>
        <div id="pokedexDefense" class="pokedex_stat"></div>
        <div id="pokedexGeneration" class=""></div>
        <div id="pokedexSpeed" class="pokedex_stat"></div>
      </section>
    </article>`
}




