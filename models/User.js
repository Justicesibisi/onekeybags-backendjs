const mongoose = require('mongoose');
const roles = require('../utils/roles');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  role: { type: String, default: roles.USER }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
