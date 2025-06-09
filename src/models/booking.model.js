import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show',
    required: true
  },
  seats: {
    type: Number,
    required: true,
    min: 1
  },
  userName: {
    type: String,
    required: true
  },
  bookingTime: {
    type: Date,
    default: Date.now
  },
  totalPrice: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
