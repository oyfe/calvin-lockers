const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Map POST /api/register to the registerUser function in userController
router.post('/register', userController.registerUser);

module.exports = router;
