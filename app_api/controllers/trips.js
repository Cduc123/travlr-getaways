const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});

    if (!trips.length) {
      return res.status(404).json({
        message: "No trips found"
      });
    }

    res.status(200).json(trips);

  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
};

// GET one trip by ID
const tripsFindById = async (req, res) => {
  const { tripId } = req.params;

  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(tripId)) {
    return res.status(400).json({
      message: "Invalid Trip ID format"
    });
  }

  try {
    const trip = await Trip.findById(tripId);

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found"
      });
    }

    res.status(200).json(trip);

  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message
    });
  }
};

module.exports = {
  tripsList,
  tripsFindById
};