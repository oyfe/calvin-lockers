import { addUser } from "../services/userService.js"

export const registerUser = async (req, res) => {
  const user = req.body
  try {
    await addUser(user);
    res.status(201).json({
      message: 'User registered successfully',
      user: result
    });
  } catch (error) {
    res.status(409).json({
      success: false,
      name: error.name,
      message: error.message
    })
  }
};

