const axios = require("axios");

exports.handler = async function (event, context) {
  let { path, httpMethod, body } = event;

  path = path.replace("/.netlify/functions/apiProxy", "");

  try {
    const response = await axios({
      method: httpMethod,
      url: `http://16.170.141.178:3001/api/${path}`,
      data: body ? JSON.parse(body) : {},
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
