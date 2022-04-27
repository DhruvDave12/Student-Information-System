const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// @desc GET ALL STUDENTS
// @route GET
// @path /student/all
router.get('/student/all', studentController.getAllStudents);

// @desc POST DATA FROM THE EXTRA DETAILS FORM
// @route POST
// @path /student/extra/data
router.post('/student/extra/data', studentController.postExtraData);

// @desc UPDATE A STUDENT
// @route POST
// @path /student/update
router.post('/student/update/:id', studentController.updateStudent);

// @desc GET PARTICULAR STUDENT USING AN ID
// @route GET
// @path /student/:id
router.get('/student/:id', studentController.getParticularStudent)

module.exports = router;