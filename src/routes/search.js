const express = require('express');

const searchRouter = express.Router();

const searchController = require('../controllers/search');

searchRouter.get('/:search', searchController.getHashtag);

module.exports = searchRouter;
