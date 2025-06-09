import express from 'express';
import { createBooking, getBookings } from '../controller/booking.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js'; //  import auth

const router = express.Router();

// Base path: /api/bookings
router.post('/add', authMiddleware, createBooking); // 👈 protected
router.get('/all', authMiddleware, getBookings);    // 👈 protected (optional)

export default router;
