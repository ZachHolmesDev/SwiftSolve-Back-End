const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

// Route to get all users
router.get('/', UserController.getUsers);

// Route to retrieve a specific user by ID
router.get('/:id', UserController.getUserById);

// Route to update a specific user by ID
router.patch('/:id', UserController.updateUser);

// Route to delete a specific user by ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;
