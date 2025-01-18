const jwt = require('jsonwebtoken');
const config = require('../config/appConfig'); // Import the appConfig

// Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign({ userId }, config.JWT_SECRET_KEY, { expiresIn: '1h' });
  };
  
  // Verify JWT Token
  const verifyToken = (token) => {
    try {
      return jwt.verify(token, config.JWT_SECRET_KEY);
    } catch (error) {
      throw new Error('Invalid token');
    }
  };
  

module.exports = {
    generateToken,
    verifyToken,
  };
  