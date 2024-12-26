import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/config.js';

export const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
};
