function templatePokemonCards(name, index) {
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

      <div class="portrait" 
        style=" width: auto; ${getPokemonBackgroundStyle(index)}">
        <img src="${PokemonImage[index]}" alt="${name}">
      </div>

      <div class="types">${getPokemonTypeBadges(index)}</div>
    </article>
  `;
}



function templatePokedex(index) {
  return `
    <div class="overlay_backdrop"></div>

    <article class="pokedex">
      <header class="pokedex_header">
        <button id="pokedexPrev" class="pokedex_nav_btn" onclick="prevPokedex()">◀</button>
        <div id="pokedexId" class="pokedex_id">#${getPokemonId(index)}</div>
        <h3 id="pokedexName" class="pokedex_name">${PokemonName[index]}</h3>
        <div id="pokedexGeneration" class="pokedex_generation">${PokemonGeneration[index]}</div>
        <button onclick="closePokedex()" class="pokedex_close">❌</button>
        <button id="pokedexNext" class="pokedex_nav_btn" onclick="nextPokedex()">▶</button>
      </header>



      <!-- Tabs -->
      <div id="pokedexTabs" class="pokedex_tabs">
        <button id="tabAbout" class="pokedex_tab is_active" onclick="openPokedexTab('about')">About</button>
        <button id="tabStats" class="pokedex_tab" onclick="openPokedexTab('stats')">Stats</button>
      </div>

      <!-- ABOUT -->
      <section id="pokedexAbout" class="pokedex_section">
        <section id="pokedexLoreBox" class="pokedex_lore">
          <div id="pokedexLoreText" class="pokedex_lore_text">${getPokemonFlavorText(index)}</div>
          <div class="pokedex_lore_meta">
            <span id="pokedexLoreHeight" class="pokedex_lore_badge">Height: ${getPokemonHeight(index)}</span>
            <span id="pokedexLoreWeight" class="pokedex_lore_badge">Weight: ${getPokemonWeight(index)}</span>
          </div>
        </section>

        <div id="pokedexImage" class="pokedex_image">
          <img src="${PokemonImage[index]}" alt="${PokemonName[index]}">
        </div>

        <div id="pokedexTypes" class="pokedex_types">
          ${getPokemonTypeBadges(index)}
        </div>
      </section>

      <!-- STATS -->
      <section id="pokedexStats" class="pokedex_section d_none">
        <div id="pokedexHP" class="pokedex_stat" style="--value:${getPokemonStat(index, 'hp')}">
          <span class="label">HP</span>
          <span class="value">${getPokemonStat(index, 'hp')}</span>
          <div class="bar"><div class="fill"></div></div>
        </div>

        <div id="pokedexAttack" class="pokedex_stat" style="--value:${getPokemonStat(index, 'attack')}">
          <span class="label">Attack</span>
          <span class="value">${getPokemonStat(index, 'attack')}</span>
          <div class="bar"><div class="fill"></div></div>
        </div>

        <div id="pokedexDefense" class="pokedex_stat" style="--value:${getPokemonStat(index, 'defense')}">
          <span class="label">Defense</span>
          <span class="value">${getPokemonStat(index, 'defense')}</span>
          <div class="bar"><div class="fill"></div></div>
        </div>

        <div id="pokedexSpeed" class="pokedex_stat" style="--value:${getPokemonStat(index, 'speed')}">
          <span class="label">Speed</span>
          <span class="value">${getPokemonStat(index, 'speed')}</span>
          <div class="bar"><div class="fill"></div></div>
        </div>
      </section>
    </article>
  `;
}