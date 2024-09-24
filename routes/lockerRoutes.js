import express from 'express';
// const lockerController = require('../controllers/lockerController');

const router = express.Router();
router.get('/', (req, res) => {
    // lockerController.addLocker
    res.send('testing works!');
});
// router.get('/', function (req, res) {
//     lockerController.getAvailableLockers
// });
// router.post('/:lockerId/rent', function (req, res) {
//     lockerController.rentLocker
// });

// module.exports = router;

export default router;