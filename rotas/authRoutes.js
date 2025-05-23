
const express = require('express')
const router = express.Router();
const AuthController = require('../controllers/authController')

router.get('/login', AuthController.login);
router.get('/register', AuthController.register);
router.post('/register', AuthController.registerPost);

module.exports = router;