// get UUID is a function that returns the uuid

const {v4: uuidv4plugin } = require('uuid')

const uuidv4 = () => {
    return uuidv4plugin();
}

module.exports = {
    uuidv4
}