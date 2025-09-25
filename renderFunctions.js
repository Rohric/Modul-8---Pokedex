function renderPokemonCard(pokemonList) {
    let refPokemonCardList = document.getElementById("card");
    refPokemonCardList.innerHTML = "";
  
    pokemonList.forEach((element, index) => {
      let name = PokemonName[index];      
      let url  = element.url;             
      refPokemonCardList.innerHTML += templatePokemonCards(name, url, index);
    });
  }
  

function getPokemonName() {
    PokemonName = [];
    PokemonDetails.forEach((details, index) => {
      PokemonName[index] = details.name;
    });
}

function showPokemonNumberList() {
  document.getElementById("showPokemonNumberList").innerHTML = offset;
}
