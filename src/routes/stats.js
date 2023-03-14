const express = require('express');

const statsRouter = express.Router();

const statsController = require('../controllers/stats');

statsRouter.get('/:stats', statsController.getStats);

module.exports = statsRouter;
