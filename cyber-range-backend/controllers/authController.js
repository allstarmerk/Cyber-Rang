const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Handle user registration
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  console.log('Registering user with:', { username, password }); // Debugging

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ username, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error); // Debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Handle user login
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  console.log('Logging in user with:', { username, password }); // Debugging

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found'); // Debugging
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log('Password mismatch'); // Debugging
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log('Login successful, token generated'); // Debugging
    res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error); // Debugging
    res.status(500).json({ message: 'Server error' });
  }
};

