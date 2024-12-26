export function validateCredentialsLogin(req, res, next) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Both fields are required' });
    }
    if (username.length < 6 || password.length < 6) {
      return res.status(400).json({
        message: 'The provided values are not valid',
      });
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
