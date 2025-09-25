function renderPokemonCard() {
    let refPokemonCardList = document.getElementById("card");
    refPokemonCardList.innerHTML = "";
  
    PokemonName.forEach((name, index) => {
      refPokemonCardList.innerHTML += templatePokemonCards(name, index);
    });
  }
  
  

function getPokemonName() {
     PokemonName = [];
    PokemonDetails.forEach((details, index) => {
      PokemonName[index] = details.name;
    });
}

function getPokemonImage() {
    PokemonImage = [];
    PokemonDetails.forEach((details, index) => {
        PokemonImage[index] = details.sprites.other['official-artwork'].front_default;
    });
}

// function getPokemonType() {
//     PokemonType = [];
//     PokemonDetails.forEach((details, index) => {
//         PokemonImage[index] = details.[''];
//     });
// }

function showPokemonNumberList() {
  document.getElementById("showPokemonNumberList").innerHTML = offset;
}
