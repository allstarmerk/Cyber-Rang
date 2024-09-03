const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  console.log('Registering user with:', { username, password }); // Debugging

  try {
    // Check if user already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    user = new User({ username, password });

    // Save user to database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error); // Debugging
    res.status(500).json({ message: 'Server error' });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  console.log('Logging in user with:', { username, password }); // Debugging

  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found'); // Debugging
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log('Password mismatch'); // Debugging
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log('Login successful, token generated'); // Debugging
    res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error); // Debugging
    res.status(500).json({ message: 'Server error' });
  }
};

