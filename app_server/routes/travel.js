const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

//Get home page
router.get('/', controller.travelList);

module.exports = router;