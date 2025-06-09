import Movie from '../models/movie.model.js';
import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createMovie = asyncHandler(async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();

  res.status(201).json(
    new ApiResponse(201, movie, "Movie created successfully")
  );
});

export const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find();

  res.status(200).json(
    new ApiResponse(200, movies, "Movies fetched successfully")
  );
});
