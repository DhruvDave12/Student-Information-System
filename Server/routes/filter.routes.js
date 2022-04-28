const express = require('express');
const router = express.Router();
const filterControllers = require('../controllers/filter.controller');
// @desc POST FACULTY ON BASIS OF PROVIDED QUERIES
// @path POST
// @route /filter/faculty
router.post('/filter/faculty', filterControllers.postFilterData);

module.exports = router;