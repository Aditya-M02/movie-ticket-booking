import express from 'express';
import { createMovie, getMovies } from '../controller/movie.controller.js';

const router = express.Router();

// base route  /api/movies
router.post('/add', createMovie);
router.get('/all', getMovies);

export default router;
