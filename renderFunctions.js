function renderPokemonCard(pokemonList) {
    let refPokemonCardList = document.getElementById("card");
    refPokemonCardList.innerHTML ="";

    pokemonList.forEach((element, index) => {
        refPokemonCardList.innerHTML += templatePokemonCards(element, index);
      });
  }
  
  