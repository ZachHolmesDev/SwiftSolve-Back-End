const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();

// Route for user login
router.post('/login', AuthController.loginUser);

// Route to register a new user
router.post('/register', AuthController.registerUser);

module.exports = router;