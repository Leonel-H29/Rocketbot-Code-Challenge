import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/config.js';

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    return null;
  }
};
