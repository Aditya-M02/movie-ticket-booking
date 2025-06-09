import express from 'express';
import { createShow, getShows } from '../controller/show.controller.js';

const router = express.Router();

// Base path: /api/shows
router.post('/add', createShow);
router.get('/all', getShows);

export default router;
