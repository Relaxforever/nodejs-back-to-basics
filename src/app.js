//const {emailTemplate} = require("./js-foundation/01-template")
//require("./js-foundation/02-destructuring")
//console.log(emailTemplate)
//const { getUserById} = require("./js-foundation/03-callbacks")
//const { getUserById} = require("./js-foundation/04-arrow")

//const getPokemonById = require("./js-foundation/06-promises");
const { buildLogger } = require("./plugins");

const logger = buildLogger("app.js");

logger.log("Hola mundo");
logger.error("Very badlo");
// getPokemonById(4)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log({ err }))
//   .finally(() => console.log("Finalmente"));

// Referencia funcion factory y injeccion dependencia
// const {buildMakePerson} = require('./js-foundation/05-factory')
// const { uuidv4, getAge } = require('./plugins')

// const makePerson = buildMakePerson({ uuidv4, getAge})
// const obj =  {name: "Fidel", birthday: '1999-07-19'}

// const fidel = makePerson(obj)
// console.log(fidel)
