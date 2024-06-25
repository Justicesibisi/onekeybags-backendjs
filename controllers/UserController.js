const User = require('../models/User');
const { generateToken } = require('../utils/auth');

const registerUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  const token = generateToken(user);
  res.json({ token });
};

module.exports = { registerUser };

const loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isValid = await user.comparePassword(req.body.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = generateToken(user);
    res.json({ token });
  };
  