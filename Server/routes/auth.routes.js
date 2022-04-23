const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// @desc REGISTER user
// @route POST
// @path /register
router.post('/register', authController.registerUser);

// @desc LOGIN user
// @route POST
// @path /login
router.post('/login', authController.loginUser);

module.exports = router;