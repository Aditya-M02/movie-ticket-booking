import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';
import User from '../models/user.model.js';

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new ApiError(401, 'Unauthorized - No token provided');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      throw new ApiError(401, 'Unauthorized - User not found');
    }

    req.user = user; // attach user to request
    next();
  } catch (error) {
    next(new ApiError(401, 'Unauthorized - Invalid token'));
  }
};

export default auth;
