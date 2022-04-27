const express = require('express');
const router = express.Router();
const curricularController = require('../controllers/curricular.controller');

// @desc POST data to the curricular
// @route POST
// @path /curricular/data
router.post('/curricular/data', curricularController.postCourseData);

// @desc GET PARTICULAR STUDENT CURRICULAR DATA
// @route GET
// @path /curricular/:id
router.get('/curricular/:id', curricularController.getCurricular);

module.exports = router;