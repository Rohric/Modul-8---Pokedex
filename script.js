async function loadPokemon() {
  let response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  let responseAsJson = await response.json();
  const pokemon = responseAsJson.results;

  showPokemon(pokemon);
}

loadPokemon();

function showPokemon(pokemon) {
  pokemon.forEach((element, index) => {
    console.log(`${index+1}:${element.name}  ->  ${element.url}`);
  });
}
