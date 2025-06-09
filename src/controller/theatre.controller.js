import Theatre from "../models/theatre.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createTheatre = asyncHandler(async (req,res) =>{
const theatre  = await Theatre.create(req.body);

res.status(201).json(
    new ApiResponse(201,theatre,"Theature created Successfully")
);
});

export const getTheatre = asyncHandler(async (req,res) => {
    const theatre = await Theatre.find();

res.status(201).json(
    new ApiResponse(200,theatre,"Theature is fetched Successfully")
);
});