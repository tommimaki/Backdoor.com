const axios = require("axios");

exports.handler = async function (event, context) {
  const { path, httpMethod, body } = event;

  const apiPath = path.replace("/.netlify/functions/apiProxy", "");
  const apiUrl = `http://16.170.141.178:3001/api/${apiPath}`;

  try {
    let response;

    if (httpMethod === "GET") {
      response = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else if (httpMethod === "POST") {
      response = await axios.post(apiUrl, JSON.parse(body), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      throw new Error(`Unsupported HTTP method: ${httpMethod}`);
    }

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
