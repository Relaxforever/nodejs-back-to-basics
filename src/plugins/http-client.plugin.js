const axios = require("axios");

const httpClientPlugin = {
  get: async (url) => {
    if (!url) {
      return new Error("No url was provided is required");
    }
    const resp = await axios.get(url);
    return await resp.data;
  },
};

module.exports = {
  http: httpClientPlugin,
};
