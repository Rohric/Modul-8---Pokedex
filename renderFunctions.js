function renderPokemon(pokemon) {
    let refPokemonCardList = document.getElementById("card");
    refPokemonCardList.innerHTML = "";
  
    pokemon.forEach((element, index) => {
      refPokemonCardList.innerHTML += templatePokemonCards(element)
      console.log(`${index + 1}:${element.name}  ->  ${element.url}`);
    });
  }
  
  