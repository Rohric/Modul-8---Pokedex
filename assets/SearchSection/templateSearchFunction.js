function templatePokemonCardsSearch(name, index) {
    let badges = "";
    SearchType[index].forEach((t) => {
      badges += `<span class="badge type_${t}">${t}</span>`;
    });
  
    return `
      <article class="card">
        <h3>${name}</h3>
        <button class="open_overlay"
                style="cursor:pointer; border-radius:16px;"
                onclick="openSearchPokedex(${index})">
          Info Table
        </button>
        <div class="portrait" style="width:auto;">
          <img src="${SearchImage[index]}" alt="${name}">
        </div>
        <div class="types">${badges}</div>
      </article>
    `;
  }
  

function templateSearchPokedex(index) {
    return `
      <div class="overlay_backdrop"></div>
  
      <article class="pokedex">
        <header class="pokedex_header">
          <button id="searchPokedexPrev" class="pokedex_nav_btn" onclick="prevSearchPokedex()">◀</button>
          <div class="pokedex_id">#${getSearchPokemonId(index)}</div>
          <h3 class="pokedex_name">${SearchName[index]}</h3>
          <div class="pokedex_generation">${SearchGeneration[index]}</div>
          <button onclick="closeSearchPokedex()" class="pokedex_close">--X--</button>
          <button id="searchPokedexNext" class="pokedex_nav_btn" onclick="nextSearchPokedex()">▶</button>
        </header>
  
        <!-- Tabs -->
        <div class="pokedex_tabs">
          <button id="searchTabAbout" class="pokedex_tab is_active" onclick="openSearchPokedexTab('about')">About</button>
          <button id="searchTabStats" class="pokedex_tab" onclick="openSearchPokedexTab('stats')">Stats</button>
        </div>
  
        <!-- ABOUT -->
        <section id="searchPokedexAbout" class="pokedex_section">
          <section class="pokedex_lore">
            <div class="pokedex_lore_text">${getSearchPokemonFlavorText(index)}</div>
            <div class="pokedex_lore_meta">
              <span class="pokedex_lore_badge">Height: ${getSearchPokemonHeight(index)}</span>
              <span class="pokedex_lore_badge">Weight: ${getSearchPokemonWeight(index)}</span>
            </div>
          </section>
  
          <div class="pokedex_image">
            <img src="${SearchImage[index]}" alt="${SearchName[index]}">
          </div>
  
          <div class="pokedex_types">
            ${getSearchPokemonTypeBadges(index)}
          </div>
        </section>
  
        <!-- STATS -->
        <section id="searchPokedexStats" class="pokedex_section d_none">
          <div class="pokedex_stat" style="--value:${getSearchPokemonStat(index, 'hp')}">
            <span class="label">HP</span>
            <span class="value">${getSearchPokemonStat(index, 'hp')}</span>
            <div class="bar"><div class="fill"></div></div>
          </div>
  
          <div class="pokedex_stat" style="--value:${getSearchPokemonStat(index, 'attack')}">
            <span class="label">Attack</span>
            <span class="value">${getSearchPokemonStat(index, 'attack')}</span>
            <div class="bar"><div class="fill"></div></div>
          </div>
  
          <div class="pokedex_stat" style="--value:${getSearchPokemonStat(index, 'defense')}">
            <span class="label">Defense</span>
            <span class="value">${getSearchPokemonStat(index, 'defense')}</span>
            <div class="bar"><div class="fill"></div></div>
          </div>
  
          <div class="pokedex_stat" style="--value:${getSearchPokemonStat(index, 'speed')}">
            <span class="label">Speed</span>
            <span class="value">${getSearchPokemonStat(index, 'speed')}</span>
            <div class="bar"><div class="fill"></div></div>
          </div>
        </section>
      </article>
    `;
  }
  