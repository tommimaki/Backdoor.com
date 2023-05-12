const axios = require("axios");

exports.handler = async function (event, context) {
  let { path, httpMethod, body } = event;

  path = path.replace("/.netlify/functions/apiProxy", "");

  const config = {
    method: httpMethod,
    url: `${process.env.AWS_URL}${path}`,
  };

  if (httpMethod === "POST" || httpMethod === "PUT") {
    config.data = JSON.parse(body);
    config.headers = {
      "Content-Type": "application/json",
    };
  }

  try {
    console.log(path);
    console.log(`${process.env.AWS_URL}${path}`);
    const response = await axios(config);

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
