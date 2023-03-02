const { User } = require('../models');

exports.getAllUsers = async (_req, res) => {
  try {
    const allUser = await User.findAll();

    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json(error);
  }
}

exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId);

  if (!user) {
    res.status(404).json({ message: `user ${userId} does not exist` })
  } else {
    res.status(200).json(user);
  }
}

exports.createUsers = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json(newUser);
  } catch (error) {
    const errorMessages = error.errors.map((e) => e.message);

    res.status(400).json({ errors: errorMessages });
  }
}

exports.updateUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const findUserById = await User.findByPk(userId);
    if(!findUserById) {
      res.status(404).json({ message: `user ${userId} does not exist` })
    } else {
      const updatedUser = await User.update(req.body, { where: { id: userId } });
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

exports.deleteUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const findUserById = await User.findByPk(userId);
    if(!findUserById) {
      res.status(404).json({ message: `user ${userId} does not exist` })
    } else {
      const deletedUser = await User.destroy({ where: { id: userId } });
      res.status(200).json(deletedUser);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}