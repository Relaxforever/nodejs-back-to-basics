const { getAge } = require("../plugins/get-age.plugin");
const { uuidv4 } = require("../plugins/get-id.plugin");
const { http } = require("../plugins/http-client.plugin");
const buildLogger = require("../plugins/logger.plugin");
module.exports = {
  getAge,
  uuidv4,
  http,
  buildLogger,
};
