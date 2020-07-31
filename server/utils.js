const jwt = require('jsonwebtoken');
const config = require('config');
const token = config.get('JWT_SECRET');

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    token,
    {
      expiresIn: '24h',
    }
  );
};

module.exports = getToken;
