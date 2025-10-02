
 function applyOverlayBackdropStyle(index) {
  let overlayElement = document.getElementById("globalOverlay");
  let typeNames = PokemonType[index];
  let backgroundValue = "";

  if (typeNames.length === 1) {
    let singleTypeName = typeNames[0]; 
    backgroundValue = `var(--type-${singleTypeName})`; 
  }

  if (typeNames.length === 2) {
    let firstTypeName = typeNames[0]; 
    let secondTypeName = typeNames[1]; 
    backgroundValue = `linear-gradient(135deg, var(--type-${firstTypeName}) 0%, var(--type-${secondTypeName}) 100%)`;
  }
  overlayElement.style.setProperty("--overlay-backdrop", backgroundValue);
}

function showGlobalLoader() {
  let loader = document.getElementById('loadingSpinner');
  loader.classList.remove('d_none');
  document.getElementById('cards').classList.add('d_none')
}

function hideGlobalLoader() {
  let loader = document.getElementById('loadingSpinner');
  loader.classList.add('d_none');
  document.getElementById('cards').classList.remove('d_none')
}