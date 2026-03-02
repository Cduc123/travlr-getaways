const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');

// GET all trips
router.get('/trips', ctrlTrips.tripsList);

// GET one trip
router.get('/trips/:tripId', ctrlTrips.tripsFindById);

// POST create trip
router.post('/trips', ctrlTrips.tripsCreate);

// PUT update trip
router.put('/trips/:tripId', ctrlTrips.tripsUpdate);

// DELETE trip
router.delete('/trips/:tripId', ctrlTrips.tripsDelete);

module.exports = router;