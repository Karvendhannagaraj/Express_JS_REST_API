const bcrypt = require('bcryptjs');

// Hash password
const hashData = async (password) => {
  const saltRounds = 10; // Number of salt rounds
  return await bcrypt.hash(password, saltRounds);
};

// Compare password
const validateData = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
    hashData,
    validateData,
};
