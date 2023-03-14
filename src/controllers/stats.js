const axios = require('axios');

exports.getStats = async (req, res) => {
  const keyword = req.params.stats;

  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.ritekit.com/v1/stats/multiple-hashtags?tags=${keyword}`,
    params: { client_id: process.env.client_id },
    headers: {},
  };

  try {
    let statsResult = await axios(config);
    res.status(200).json(statsResult.data.stats[0]);
    console.log(statsResult.data.stats[0], 'THIS!');
  } catch (error) {
    console.error(error);
  }
};
