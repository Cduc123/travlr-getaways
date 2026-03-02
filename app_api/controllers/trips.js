const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find().exec();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET one trip
const tripsFindById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripId).exec();

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json(err);
  }
};

// ADD trip
const tripsAddOne = async (req, res) => {
  try {
    const trip = await Trip.create({
      destination: req.body.destination,
      duration: req.body.duration,
      price: req.body.price
    });

    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json(err);
  }
};

// UPDATE trip
const tripsUpdateOne = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripId).exec();

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    trip.destination = req.body.destination;
    trip.duration = req.body.duration;
    trip.price = req.body.price;

    await trip.save();

    res.status(200).json(trip);
  } catch (err) {
    res.status(400).json(err);
  }
};

// DELETE trip
const tripsDeleteOne = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.tripId).exec();
    res.status(204).json(null);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindById,
  tripsAddOne,
  tripsUpdateOne,
  tripsDeleteOne
};