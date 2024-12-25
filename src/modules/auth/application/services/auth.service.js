import AuthRepository from '../../infrastructure/repositories/auth.repository.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../../../utils/generateToken.js';

class AuthService {
  async register(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = await AuthRepository.createUser({
      ...userData,
      password: hashedPassword,
    });
    return newUser;
  }

  async login({ username, password }) {
    const user = await AuthRepository.findUserByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = generateToken(user);
    return { user, token };
  }

  async getUserProfile(userId) {
    const user = await AuthRepository.findUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    // Exclude password and other sensitive fields from the user object
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}

export default new AuthService();