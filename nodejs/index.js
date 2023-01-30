const appdefender = require('@extrinsec/appdefender');
const axios = require('axios');

module.exports = async function (context, req) {
  axios.get("https://www.google.com");
  context.res = {
      body: "Go AppDefender!!"
  };
}