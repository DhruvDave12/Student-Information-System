const express = require('express');
const router = express.Router();
const filterControllers = require('../controllers/filter.controller');

// @desc POST FACULTY ON BASIS OF PROVIDED QUERIES
// @path POST
// @route /filter/faculty
router.post('/filter/faculty', filterControllers.postFilterData);

// @desc POST CURRICULAR ON BASIS OF PROVIDED QUERIES
// @path POST
// @route /filter/curricular
router.post('/filter/curricular', filterControllers.postCurricularFilterData);

// @desc POST ACADEMICS ON BASIS OF PROVIDED QUERIES
// @path POST
// @route /filter/academics
router.post('/filter/academics', filterControllers.postAcademicsFilterData);

// @desc POST INTERNSHIP ON BASIS OF PROVIDED QUERIES
// @path POST
// @route /filter/internship
router.post('/filter/internship', filterControllers.postInternshipFilterData);

module.exports = router;