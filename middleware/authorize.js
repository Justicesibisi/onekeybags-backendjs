const roles = require('../utils/roles');

const authorize = (role) => {
  return async (req, res, next) => {
    if (!req.user || req.user.role!== role) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
};

module.exports = authorize;
