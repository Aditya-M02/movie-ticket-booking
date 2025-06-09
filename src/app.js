import express from 'express';
import cors from 'cors';
import movieRoutes from './routes/movie.route.js';
import theatreRouter from './routes/theatre.route.js';
import showRouter from './routes/show.route.js';
import bookingRouter from './routes/booking.route.js';
import authRoutes from './routes/auth.route.js';
import auth from './middlewares/auth.middleware.js';





const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes);
app.use('/api/theatres', theatreRouter);
app.use('/api/shows', showRouter);

app.use('/api/auth', authRoutes);

// Protected Routes (Require login)
app.use('/api/bookings', auth, bookingRouter);


app.get('/', (req, res) => {
  res.send('Welcome to Movie Ticket Booking API');
});

export default app;
