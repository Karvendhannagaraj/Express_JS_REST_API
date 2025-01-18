
const User = require('../models/User'); 
const jwtUtil = require('../utils/jwtUtil');
const bcryptUtil = require('../utils/bcryptUtil'); 
const responseUtil = require('../utils/responseUtil'); 
// Register function
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword =  bcryptUtil.hashData(password);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    responseUtil.sendResponse(res,newUser,201,'User registered successfully');
  } catch (err) {
    console.error(err);
    responseUtil.sendResponse(res,[],500,'Internal server error');
  }
};

// Login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if password matches
    const isMatch = await bcryptUtil.validateData(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // Generate JWT token using the utility function
    const token = jwtUtil.generateToken(user._id);

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  register,
  login,
};

