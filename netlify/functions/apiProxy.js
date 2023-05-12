const axios = require("axios");

exports.handler = async function (event, context) {
  const { path, httpMethod, body } = event;
  console.log("new function");
  console.log("method", httpMethod);
  console.log("body", body);
  console.log("path", path);

  const apiPath = path.replace("/.netlify/functions/apiProxy", "");
  const apiUrl = `${process.env.NEXT_PUBLIC_AWS_IP}${apiPath}`;

  console.log("apipath", apiPath);
  console.log("apiUrl", apiUrl);
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
