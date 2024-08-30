// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Register a new user
router.post('/register', UserController.register);

// Login a user
router.post('/login', UserController.login);

module.exports = router;
