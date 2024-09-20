const express = require('express');
const lockerController = require('../controllers/lockerController');

const router = express.Router();
router.post('/', lockerController.addLocker);
router.get('/', lockerController.getAvailableLockers);
router.post('/:lockerId/rent', lockerController.rentLocker);

module.exports = router;