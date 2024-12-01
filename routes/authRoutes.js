const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Routes
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);

module.exports = router;