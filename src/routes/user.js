const express = require('express');

const userRouter = express.Router();

const userController = require('../controllers/user');

userRouter.post('/', userController.createUsers);

module.exports = userRouter;
