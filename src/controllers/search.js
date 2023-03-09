const axios = require('axios');

exports.getHashtag = async (req, res) => {
  const keyword = req.params.search;

  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.ritekit.com/v1/stats/auto-hashtag?post=${keyword}&maxHashtags=30&hashtagPosition=auto`,
    params: {client_id: process.env.client_id},
    headers: { }
  };

  try {
    let searchResult = await axios(config);
    res.status(200).json(searchResult.data.post)
    console.log(searchResult.data.post, "THIS!")

  } catch (error) {
    console.error(error);
  }

  // axios(config)
  // .then(function (response) {
  //   console.log(JSON.stringify(response.data.post));
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
}