const express = require('express');
const router = express.Router();
const internRouters = require('../controllers/internship.controllers');

// @desc POST INTERN DATA
// @path POST
// @route /internship/extra/data
router.post('/internship/extra/data',  internRouters.postInternship)

// @desc GET PARTICULAR INTERN DATA
// @path GET
// @route /internship/:id
router.get('/internship/:id',  internRouters.getParticularInternData)

module.exports = router;