let poke = { 
  especie: '', 
  numero: '',
  imagen_front: null ,
  imagen_back: null ,
  tipo:[],
  movimientos:[],
  habilidades:[],
  };

  function getPokemon(pokemon) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const axios = require("axios");
    const urlaxios=url+pokemon; 
    axios.get(urlaxios) 
    .then(resp => { 
      let pokeData=resp.data; 
      poke.especie=pokeData.species.name;
      poke.numero=pokeData.id;
      poke.imagen_front=pokeData.sprites.front_default;
      poke.imagen_back=pokeData.sprites.back_default;
      poke.tipo=pokeData.types;
      poke.movimientos=pokeData.moves;
      poke.habilidades=pokeData.abilities;
    })
    .catch(error =>{ 
      console.log(error); 
    }) 
    return poke;
  }
module.exports = { getPokemon }

