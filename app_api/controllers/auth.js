const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('users');
const SECRET = 'travlrSecretKey';

const register = async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();

    if (!user || !(await user.validPassword(req.body.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { register, login };