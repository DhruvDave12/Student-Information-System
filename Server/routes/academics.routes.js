const express = require('express');
const router = express.Router();
const academicsControllers = require('../controllers/academics.controller');

// @desc GET Academic data of a student
// @path GET
// @route /academics/data/:id
router.get('/academics/data/:id', academicsControllers.getParticularStudentAcademics);

// @desc POST Academic data of a student
// @path POST
// @route /academics/data
router.post('/academics/data', academicsControllers.postExtraData);

// @desc POST Update academics data
// @path POST
// @route /academics/update/:id
router.post('/academics/update/:id', academicsControllers.updateParticularStudentAcademics);

module.exports = router;