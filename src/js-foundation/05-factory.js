
//const { getAge, uuidv4} = require('../plugins')



const buildMakePerson = ({uuidv4, getAge}) => {
    return  ({name, birthday}) => {
        return {
            id: uuidv4(),
            name: name,
            birthday: birthday,
            age: getAge(birthday)
            }
        }
}




//const fidel = buildPerson(obj)

//console.log(fidel)

module.exports = {
    buildMakePerson,
}