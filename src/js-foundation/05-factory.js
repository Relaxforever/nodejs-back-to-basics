
const { getAge, uuidv4} = require('../plugins')

const obj =  {name: "Fidel", birthday: '1999-07-19'}
const buildPerson = ({name, birthday}) => {

return {
    id: uuidv4(),
    name: name,
    birthday: birthday,
    age: getAge(birthday)
    }
}


const fidel = buildPerson(obj)

console.log(fidel)