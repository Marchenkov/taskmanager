import express from 'express';
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.post('/auyh/register', authController.register);
router.post('/auth/login', authController.login);

export default router;
