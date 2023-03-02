const express = require('express');
const axios = require('axios');

const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/users', hashtagRouter);
app.use('/hashtags', hashtagRouter);

// var config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: 'https://api.ritekit.com/v1/stats/auto-hashtag?post=art&maxHashtags=20&hashtagPosition=auto',
//     params: {client_id: process.env.client_id},
//     headers: { }
//   };
  
//   axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data.post));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


module.exports = app;