const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    const token = jwt.sign({ userId: user._id }, "43677", {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.logoutUser = (req, res) => {
  try {
    // Clear token from sessionStorage
    sessionStorage.removeItem('token');
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error logging out:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.listUsers = async (req, res) => {
  try {
    let users = await User.find().select('username email updatedAt createdAt')
    res.json(users)
  } catch (err) {
    return res.status(400).json({
      // error: errorHandler.getErrorMessage(err)
      error: "error occured"
    })
  }
}