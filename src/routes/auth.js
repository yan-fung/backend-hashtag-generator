const express = require('express');

const authRouter = express.Router();

const authController = require('../controllers/auth');

authRouter.post('/:id', authController.handleJwt);

module.exports = authRouter;