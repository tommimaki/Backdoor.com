const axios = require("axios");

exports.handler = async function (event, context) {
  let { path, httpMethod, body } = event;

  path = path.replace("/.netlify/functions/apiProxy", "");
  //test redeploy
  try {
    console.log(path);
    console.log(`${process.env.NEXT_PUBLIC_AWS_URL}${path}`);
    const response = await axios({
      method: httpMethod,
      url: `${process.env.NEXT_PUBLIC_AWS_URL}${path}`,
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
