const express = require('express');
let cors = require('cors');

const corsOptions = {
  origin: 'https://localhost:3001',
  credentials: true,
};

// const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');
const searchRouter = require('./routes/search');
const statsRouter = require('./routes/stats');
const authRouter = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

// app.use('/users', userRouter);
// app.use('/users', hashtagRouter);
app.use('/hashtags', hashtagRouter);
app.use('/search', searchRouter);
app.use('/stats', statsRouter);
app.use('/auth', authRouter);
module.exports = app;
