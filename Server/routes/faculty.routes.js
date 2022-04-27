const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/faculty.controllers');

// @desc GET ALL FACULTIES
// @path GET
// @route /faculty/all
router.get('/faculty/all', facultyController.getAllFaculties);

// @desc POST FACULTY EXTRA DATA
// @path POST
// @route /faculty/extra/data
router.post('/faculty/extra/data', facultyController.postExtraData)

// @desc DELETE A PARTICULAR STUDENT
// @path DELETE
// @route /faculty/delete/student/:id
router.post('/faculty/delete/student/:id', facultyController.deleteAStudent); 

// @desc GET PARTICULAR FACULTY
// @path GET
// @route /faculty/:id
router.get('/faculty/:id', facultyController.getParticularFaculty)


module.exports = router;