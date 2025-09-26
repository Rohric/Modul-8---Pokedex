async function loadAllPokemon() {
    let globalResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0`
    );
    let globalResponseAsJson = await globalResponse.json();
  pokemonList=[]
    globalResponseAsJson.results.forEach((element) => {
      pokemonList.push(element);
    });

  }