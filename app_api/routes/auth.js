const express = require('express');
const router = express.Router();
const ctrlAuth = require('../controllers/auth');

// PUBLIC routes
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;