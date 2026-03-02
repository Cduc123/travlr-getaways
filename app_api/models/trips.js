const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  destination: String,
  duration: String,
  price: String
});

mongoose.model('trips', tripSchema);