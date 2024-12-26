import AuthService from '../../application/services/auth.service.js';

class AuthController {
  async register(req, res) {
    try {
      const newUser = await AuthService.register(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const loginResponse = await AuthService.login({ username, password });
      res.status(200).json(loginResponse);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async profile(req, res) {
    try {
      const userProfile = await AuthService.getUserProfile(req.user.id);
      res.status(200).json(userProfile);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default new AuthController();
