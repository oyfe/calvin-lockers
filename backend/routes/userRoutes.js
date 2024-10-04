import express from 'express';
import { registerUser } from '../controllers/userController.js';
const router = express.Router();

// Map POST /api/register to the registerUser function in userController
router.post('/', registerUser);

export default router 
