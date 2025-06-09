import Show from '../models/show.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export const createShow = asyncHandler(async (req, res) => {
  const show = await Show.create(req.body);
  res.status(201).json(new ApiResponse(201, show, "Show created successfully"));
});

export const getShows = asyncHandler(async (req, res) => {
  const shows = await Show.find()
    .populate('movie', 'title')
    .populate('theatre', 'name location');
  
  res.status(200).json(new ApiResponse(200, shows, "All shows fetched"));
});
