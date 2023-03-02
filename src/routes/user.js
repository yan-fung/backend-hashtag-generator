const express = require('express');

const userRouter = express.Router();

const userController = require('../controllers/user');

userRouter.get('/', userController.getAllUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.post('/', userController.createUsers);
userRouter.patch('/:id', userController.updateUserById);
userRouter.delete('/:id', userController.deleteUserById);

module.exports = userRouter;
