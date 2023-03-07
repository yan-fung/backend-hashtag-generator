const express = require('express');
let cors = require('cors');

// const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');
const searchRouter = require('./routes/search');

const app = express();

app.use(express.json());
app.use(cors());

// app.use('/users', userRouter);
// app.use('/users', hashtagRouter);
app.use('/hashtags', hashtagRouter);
app.use('/search', searchRouter);

module.exports = app;