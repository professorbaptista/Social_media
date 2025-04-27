const express = require('express');
const Thought = require('../models/thoughts');
const ThoughtController = require('../controllers/thoughtController')

const router = express.Router();

router.get('/', ThoughtController.showThought)

module.exports = router;