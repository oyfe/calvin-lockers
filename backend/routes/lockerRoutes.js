import express from 'express';

import { registerLocker, getAvailableLockers } from "../controllers/lockerController.js"
const router = express.Router();

router.post('/',registerLocker);
router.get('/', getAvailableLockers);

export default router;