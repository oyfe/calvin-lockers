const express = require('express');
const lockerController = require('../controllers/lockerController');

const router = express.Router();
router.post('/', function (req, res) {
    lockerController.addLocker
});
router.get('/', function (req, res) {
    lockerController.getAvailableLockers
});
router.post('/:lockerId/rent', function (req, res) {
    lockerController.rentLocker
});

module.exports = router;