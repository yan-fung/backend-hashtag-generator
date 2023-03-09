const jwt = require('jsonwebtoken');

exports.handleJwt = (req, res) => {
  const userId = req.params.id;
  const jwtSecret = process.env.jwtSecret;

  const token = jwt.sign({ userId }, jwtSecret, { expiresIn: '7d' });
  console.log(token);
  try {
    res
      .status(201)
      .cookie('userToken', token, {
        maxAge: 1000 * 60 * 60 * 24 * 2,
        secure: true,
        sameSite: 'none',
      })
      .send({
        status: 201,
        message: 'cookie created, logged in',
      });
  } catch (e) {
    console.log(e);
    res.status(400).send({ e });
  }
};
