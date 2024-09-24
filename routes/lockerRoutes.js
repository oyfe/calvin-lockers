import express from 'express';

import { registerLocker, getAvailableLockers } from "../controllers/lockerController.js"

const router = express.Router();

// router.get('/', (req, res) => {
    // lockerController.addLocker
    // res.send('testing works!');
// });

// Route to add lockers

// router.post('/', registerLocker);
router.get('/', getAvailableLockers);
// router.get('/', function (req, res) {
//     lockerController.getAvailableLockers
// });
// router.post('/:lockerId/rent', function (req, res) {
//     lockerController.rentLocker
// });

// module.exports = router;

export default router;