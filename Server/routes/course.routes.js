const express = require('express');
const router = express.Router();
const courseControllers = require('../controllers/course.controller');

// @desc POST course data to the database
// @route POST
// @path /course/data
router.post('/course/data', courseControllers.setCourse);

// @desc GET all courses
// @route GET
// @path /courses/all
router.get('/courses/all', courseControllers.getAllCourses);

// @desc GET PARTICULAR FACULTY COURSE
// @route GET
// @path /faculty/courses/:id
router.get('/faculty/courses/:id', courseControllers.getParticularFacultyCourse);

module.exports = router;