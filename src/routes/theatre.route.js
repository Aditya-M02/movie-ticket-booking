import express from 'express';
import { createTheatre, getTheatre } from '../controller/theatre.controller.js';

const router = express.Router();

// Base path: /api/theatres
router.post('/add', createTheatre);
router.get('/all', getTheatre);

export default router;
