import express from 'express';
import { signup, login } from '../controller/auth.controller.js';

const router = express.Router();

// @route POST /api/auth/signup
router.post('/signup', signup);

// @route POST /api/auth/login
router.post('/login', login);

export default router;
