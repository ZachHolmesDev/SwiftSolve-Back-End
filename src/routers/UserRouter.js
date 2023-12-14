const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

// Route to register a new user
router.post('/register', UserController.registerUser);

// Route for user login
router.post('/login', UserController.loginUser);

router.get('/', UserController.getUsers);

// Route to retrieve a specific user by ID
router.get('/:id', UserController.getUserById);

// Route to update a specific user by ID
router.patch('/:id', UserController.updateUser);

// Route to delete a specific user by ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;
