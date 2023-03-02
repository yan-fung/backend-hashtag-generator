const express = require('express');

const hashtagRouter = express.Router();

const hashtagController = require('../controllers/hashtag');

hashtagRouter.post('/:id/hashtag', hashtagController.createHashtag);
hashtagRouter.get('/', hashtagController.getAllHashtags);
hashtagRouter.get('/:id', hashtagController.getHashtagById);
hashtagRouter.patch('/:id', hashtagController.updateHashtagById);
hashtagRouter.delete('/:id', hashtagController.deleteHashtagById);

module.exports = hashtagRouter;
