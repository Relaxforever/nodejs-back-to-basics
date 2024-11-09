const { http } = require("../plugins");

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await http.get(url);
  return pokemon.name;
};

// Con Callbacks
// const getPokemonById = (id, callback) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   return fetch(url).then((response) => {
//     return response.json();
//     //Response cochina con promise Hell
//     // response.json().then((pokemon) => {
//     //   callback(pokemon.name);
//     // });
//   });
// };

module.exports = getPokemonById;
