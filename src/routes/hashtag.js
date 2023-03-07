const express = require('express');

const hashtagRouter = express.Router();

const hashtagController = require('../controllers/hashtag');

hashtagRouter.post('/', hashtagController.createHashtag);
hashtagRouter.get('/', hashtagController.getAllHashtags);
hashtagRouter.get('/:category', hashtagController.getHashtagByCategory);
hashtagRouter.patch('/:id', hashtagController.updateHashtagById);
hashtagRouter.delete('/:id', hashtagController.deleteHashtagById);

module.exports = hashtagRouter;
