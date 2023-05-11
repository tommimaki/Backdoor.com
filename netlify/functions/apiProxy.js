const axios = require("axios");

exports.handler = async function (event, context) {
  let { path } = event;

  path = path.replace("/.netlify/functions/apiProxy", "");

  try {
    console.log(path);
    console.log(`http://16.170.141.178:3001/api/${path}`);
    const response = await axios({
      method: "GET",
      url: `http://16.170.141.178:3001/api/${path}`,
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
