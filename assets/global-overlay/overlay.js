
 function applyOverlayBackdropStyle(index) {
  // Referenz auf das Overlay-Element mit der ID "globalOverlay" holen
  let overlayElement = document.getElementById("globalOverlay");

  // Die Typnamen des aktuell geöffneten Pokémon aus dem Array "PokemonType" lesen
  // Beispiel: ["grass"] oder ["grass", "poison"]
  let typeNames = PokemonType[index];

  // Variable vorbereiten, in die wir gleich den fertigen CSS-Hintergrundwert schreiben
  let backgroundValue = "";

  // Wenn genau ein Typ vorhanden ist, verwenden wir einfach die einzelne Typ-Farbe
  if (typeNames.length === 1) {
    let singleTypeName = typeNames[0]; // z. B. "grass"
    backgroundValue = `var(--type-${singleTypeName})`; // z. B. var(--type-grass)
  }

  // Wenn zwei Typen vorhanden sind, bauen wir einen Farbverlauf aus beiden Typ-Farben
  if (typeNames.length === 2) {
    let firstTypeName = typeNames[0]; // z. B. "grass"
    let secondTypeName = typeNames[1]; // z. B. "poison"
    backgroundValue = `linear-gradient(135deg, var(--type-${firstTypeName}) 0%, var(--type-${secondTypeName}) 100%)`;
  }

  // Den berechneten Hintergrundwert als CSS-Variable "--overlay-backdrop" am Overlay-Element setzen
  // (die .overlay_backdrop liest diesen Wert in der CSS-Regel mit "background: var(--overlay-backdrop);")
  overlayElement.style.setProperty("--overlay-backdrop", backgroundValue);
}