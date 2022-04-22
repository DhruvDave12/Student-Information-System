const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// @desc GET all students
// @route GET
// @path /students
router.get('/students', studentController.getAllStudent);

module.exports = router;