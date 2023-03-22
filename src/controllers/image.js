const axios = require('axios');

exports.getHashtagsByImage = async (req, res) => {
  const ImageUrl = encodeURIComponent(req.params.url);

  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.ritekit.com/v1/stats/hashtag-suggestions-image?image=${ImageUrl}`,
    params: { client_id: process.env.client_id },
    headers: {},
  };

  try {
    let imageResult = await axios(config);
    res.status(200).json(imageResult.data.data);
    console.log(
      `https://api.ritekit.com/v1/stats/hashtag-suggestions-image?image=${ImageUrl}`
    );
  } catch (error) {
    console.log(error);
  }
};
