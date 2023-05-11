const axios = require("axios");

exports.handler = async function (event, context) {
  const { path } = event;

  path = path.replace("/.netlify/functions/apiProxy", "");

  try {
    const response = await axios({
      method: "GET",
      url: `http://16.170.141.178:3001/api/${path}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
