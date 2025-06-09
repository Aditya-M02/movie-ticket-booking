import Booking from '../models/booking.model.js';
import Show from '../models/show.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';

export const createBooking = asyncHandler(async (req, res) => {
  const { show, seats, userName } = req.body;

  const showDetails = await Show.findById(show);
  if (!showDetails) {
    throw new ApiError(404, "Show not found");
  }

  const totalPrice = showDetails.price * seats;

  const booking = await Booking.create({
    show,
    seats,
    userName,
    totalPrice,
    user: req.user._id // 👈 Added user from token
  });

  res.status(201).json(new ApiResponse(201, booking, "Booking successful"));
});

export const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find()
    .populate('user', 'name email') // Optional: populate user info
    .populate({
      path: 'show',
      populate: [{ path: 'movie', select: 'title' }, { path: 'theatre', select: 'name location' }]
    });

  res.status(200).json(new ApiResponse(200, bookings, "All bookings"));
});
