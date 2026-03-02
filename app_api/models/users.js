const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.validPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

mongoose.model('users', userSchema);