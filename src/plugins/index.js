const { getAge } = require("../plugins/get-age.plugin");
const { uuidv4 } = require("../plugins/get-id.plugin");
const { http } = require("../plugins/http-client.plugin");
module.exports = {
  getAge,
  uuidv4,
  http,
};
