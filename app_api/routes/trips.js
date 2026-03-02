const authenticate = require('../middleware/auth');
const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');

// GET all trips
router.get('/trips', ctrlTrips.tripsList);

// GET one trip
router.get('/trips/:tripId', ctrlTrips.tripsFindById);

// POST create trip
router.post('/trips', authenticate, ctrlTrips.tripsAddOne);

// PUT update trip
router.put('/trips/:tripId', authenticate, ctrlTrips.tripsUpdateOne);

// DELETE trip
router.delete('/trips/:tripId', authenticate, ctrlTrips.tripsDeleteOne);

module.exports = router;