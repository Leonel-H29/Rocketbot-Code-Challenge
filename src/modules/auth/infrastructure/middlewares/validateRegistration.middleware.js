export function validateRegistration(req, res, next) {
  try {
    const { name, surname, email, username, password } = req.body;

    if (!name || !surname || !email || !username || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (
      name.length < 3 ||
      surname.length < 3 ||
      username.length < 6 ||
      password.length < 6
    ) {
      return res.status(400).json({
        message: 'Fields must have a length of at least 6 characters',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email is not valid' });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
