// authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Handle user registration
console.log('authRoutes.js');
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
