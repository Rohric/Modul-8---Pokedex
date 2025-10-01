function openPokedex(index) {
    currentPokedex = index;
    renderGlobalOverlay();
    applyOverlayBackdropStyle(index);
    fillPokedex(index);
  
    let refOverlay = document.getElementById("globalOverlay");
    refOverlay.classList.remove("d_none");
    document.body.classList.add("overlay_open");
  }
  
  function closePokedex() {
    currentPokedex = null;
    let refOverlay = document.getElementById("globalOverlay");
    refOverlay.classList.add("d_none");
    document.body.classList.remove("overlay_open");
  }
  
  function openPokedexTab(which) {
    // Head Hurts
     let about = document.getElementById('pokedexAbout');
     let stats = document.getElementById('pokedexStats');
     let tabAbout = document.getElementById('tabAbout');
     let tabStats = document.getElementById('tabStats');
   
     if (which === 'about') {
       about.classList.remove('d_none');
       stats.classList.add('d_none');
       tabAbout.classList.add('is_active');
       tabStats.classList.remove('is_active');
     } else {
       stats.classList.remove('d_none');
       about.classList.add('d_none');
       tabStats.classList.add('is_active');
       tabAbout.classList.remove('is_active');
     }
   }
   
   function prevPokedex() {
     currentPokedex = (currentPokedex - 1 + PokemonName.length) % PokemonName.length;
     fillPokedex(currentPokedex);
     setOverlayTypeBackground(currentPokedex); 
   }
   
   function nextPokedex() {
     currentPokedex = (currentPokedex + 1) % PokemonName.length;
     fillPokedex(currentPokedex);
     setOverlayTypeBackground(currentPokedex);
   }
  
  function fillPokedex(index) {
    // get Name from Pokemon
    document.getElementById("pokedexName").textContent = PokemonName[index];
  
    //get Image from Pokemon
    document.getElementById("pokedexImage").innerHTML = `
    <img src="${PokemonImage[index]}" alt="${PokemonName[index]}">`;
  
    // get Types from Pokemon
    document.getElementById("pokedexTypes").innerHTML =
      getPokemonTypeBadges(index);
  
    // get Generations from Pokemon
    document.getElementById("pokedexGeneration").textContent =
      PokemonGeneration[index];
  
    // get ID from Pokemon neu!!!
    document.getElementById("pokedexId").textContent =
      "Pokemon-ID: " + getPokemonId(index);
  
    //Lore
    document.getElementById("pokedexLoreText").textContent =
      getPokemonFlavorText(index);
  
    document.getElementById("pokedexLoreHeight").textContent =
      "Height: " + getPokemonHeight(index);
  
    document.getElementById("pokedexLoreWeight").textContent =
      "Weight: " + getPokemonWeight(index);
  
    // HP
    let hp = getPokemonStat(index, "hp");
    document.querySelector("#pokedexHP .value").textContent = hp;
    document.getElementById("pokedexHP").style.setProperty("--value", hp);
  
    // Attack
    let atk = getPokemonStat(index, "attack");
    document.querySelector("#pokedexAttack .value").textContent = atk;
    document.getElementById("pokedexAttack").style.setProperty("--value", atk);
  
    // Defense
    let def = getPokemonStat(index, "defense");
    document.querySelector("#pokedexDefense .value").textContent = def;
    document.getElementById("pokedexDefense").style.setProperty("--value", def);
  
    // Speed
    let speed = getPokemonStat(index, "speed");
    document.querySelector("#pokedexSpeed .value").textContent = speed;
    document.getElementById("pokedexSpeed").style.setProperty("--value", speed);
  }

