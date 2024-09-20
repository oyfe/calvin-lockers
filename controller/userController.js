const userService = require('../services/userService');

exports.registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const result = await userService.register(username, password, email);
    res.status(201).json({ message: 'User registered successfully', user: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
