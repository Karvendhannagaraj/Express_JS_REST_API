const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controllers/AuthenticationController');

// User Registration and Login
router.post('/user/register', (req, res) => AuthenticationController.register(req, res, 'user'));
router.post('/user/login', (req, res) => AuthenticationController.login(req, res, 'user'));

// Admin Registration and Login
router.post('/admin/register', (req, res) => AuthenticationController.register(req, res, 'admin'));
router.post('/admin/login', (req, res) => AuthenticationController.login(req, res, 'admin'));

module.exports = router;
