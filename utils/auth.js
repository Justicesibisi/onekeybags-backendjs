const jwt = require('jsonwebtoken');

const secretKey = 'onekeybags_secret_key';

const generateToken = (user) => {
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
