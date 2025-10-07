let currentSearchPokedex = null;
let NoMatchImageSrc = './assets/images/nofound.png';

async function renderMatches() {
  let refCards = document.getElementById('cards');
  let refMatches = document.getElementById('searchMatches');
  refCards.classList.add('d_none');
  refMatches.classList.remove('d_none');
  refMatches.innerHTML = '';

  if (SearchName.length === 0) {
    refMatches.innerHTML = `
      <div id="noMatches" class="no_Matches">
        <img src="${NoMatchImageSrc}" alt="Kein Pokémon gefunden" style="max-width:320px;width:80%;height:auto;">
      </div>
    `;
    document.getElementById('showPokemonNumberList').innerText = '0';
    return;
  }

  SearchName.forEach((name, index) => {
    refMatches.innerHTML += templatePokemonCardsSearch(name, index);
  });

  let info = document.getElementById('showPokemonNumberList');
  if (info) info.innerText = SearchName.length;
}

function renderSearchPokedex(index) {
  currentSearchPokedex = index;

  let overlayRef = document.getElementById('searchOverlay');
  overlayRef.innerHTML = templateSearchPokedex(index);

  overlayRef.classList.remove('d_none');
  document.body.classList.add('overlay_open');

  applySearchOverlayBackdropStyle(index);
  openSearchPokedexTab('about');
}

function openSearchPokedex(index) {
  renderSearchPokedex(index);
}

function closeSearchPokedex() {
  currentSearchPokedex = null;
  let overlayRef = document.getElementById('searchOverlay');
  overlayRef.classList.add('d_none');
  document.body.classList.remove('overlay_open');
}
