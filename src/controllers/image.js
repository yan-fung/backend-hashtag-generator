const axios = require('axios');

exports.getHashtagsByImage = async (req, res) => {
  const url = req.params.url;
  const url2 = encodeURIComponent(`${url}`);

  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.ritekit.com/v1/stats/hashtag-suggestions-image?image=${url2}`,
    params: { client_id: process.env.client_id },
    headers: {},
  };

  try {
    let imageResult = await axios(config);
    res.status(200).json(imageResult.data.data);
    console.log(
      `https://api.ritekit.com/v1/stats/hashtag-suggestions-image?image=${url}`
    );
    console.log(imageResult.data, 'THIS!');
  } catch (error) {
    console.error(error);
  }
};
