function templatePokemonCards(name, index,) {
  return `
    <article class="card">

      <h3>${name} </h3>

      <button
        class="open_overlay"
        style="${getPokemonBackgroundStyle(index)};
        cursor: pointer;
        border-radius: 16px;"
        onclick="openPokedex(${index})">
        Info Table
      </button>

      <div class="card" style=" width: auto; ${getPokemonBackgroundStyle(index)}"><img src="${PokemonImage[index]}" alt="${name}"></div>

      <div class="types">${getPokemonTypeBadges(index)}</div>
    </article>
  `;
}
// Pokemon-ID: ${getPokemonId(index)}

function templateGlobalOverlay(){
  return `
    <div class="overlay_backdrop"></div>

    <article class="pokedex">
      <header class="pokedex_header">
      <div id="pokedexId" class="pokedex_id"></div>
        <h3 id="pokedexName" class="pokedex_name"></h3>
        <button onclick="closePokedex()" class="pokedex_close">--X--</button>
      </header>

      <section class="pokedex_body">
        <div id="pokedexImage" class="pokedex_image"></div>
        <div id="pokedexTypes" class="pokedex_types"></div>

        
        
        <div id="pokedexHP" class="pokedex_stat"></div>
        <div id="pokedexAttack" class="pokedex_stat"></div>
        <div id="pokedexDefense" class="pokedex_stat"></div>
        <div id="pokedexSpeed" class="pokedex_stat"></div>
        <div id="pokedexGeneration" class=""></div>

        
      </section>
    </article>`
}




