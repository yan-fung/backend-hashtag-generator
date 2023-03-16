const express = require('express');

const imageRouter = express.Router();

const imageController = require('../controllers/image');

imageRouter.get('/:url', imageController.getHashtagsByImage);

module.exports = imageRouter;
