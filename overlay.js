function openPokedex(index) {
  currentPokedex = index;
  renderGlobalOverlay();
  applyOverlayBackdropStyle(index)
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
    let spe = getPokemonStat(index, "speed");
    document.querySelector("#pokedexSpeed .value").textContent = spe;
    document.getElementById("pokedexSpeed").style.setProperty("--value", spe);
}


function applyOverlayBackdropStyle(index) {
  // Referenz auf das Overlay-Element mit der ID "globalOverlay" holen
  let overlayElement = document.getElementById('globalOverlay');

  // Die Typnamen des aktuell geöffneten Pokémon aus dem Array "PokemonType" lesen
  // Beispiel: ["grass"] oder ["grass", "poison"]
  let typeNames = PokemonType[index];

  // Variable vorbereiten, in die wir gleich den fertigen CSS-Hintergrundwert schreiben
  let backgroundValue = "";

  // Wenn genau ein Typ vorhanden ist, verwenden wir einfach die einzelne Typ-Farbe
  if (typeNames.length === 1) {
    let singleTypeName = typeNames[0];                                 // z. B. "grass"
    backgroundValue = `var(--type-${singleTypeName})`;                  // z. B. var(--type-grass)
  }

  // Wenn zwei Typen vorhanden sind, bauen wir einen Farbverlauf aus beiden Typ-Farben
  if (typeNames.length === 2) {
    let firstTypeName = typeNames[0];                                   // z. B. "grass"
    let secondTypeName = typeNames[1];                                  // z. B. "poison"
    backgroundValue = `linear-gradient(135deg, var(--type-${firstTypeName}) 0%, var(--type-${secondTypeName}) 100%)`;
  }

  // Den berechneten Hintergrundwert als CSS-Variable "--overlay-backdrop" am Overlay-Element setzen
  // (die .overlay_backdrop liest diesen Wert in der CSS-Regel mit "background: var(--overlay-backdrop);")
  overlayElement.style.setProperty('--overlay-backdrop', backgroundValue);
}
