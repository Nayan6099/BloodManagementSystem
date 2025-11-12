const jwt = require('jsonwebtoken');
const axios = require('axios');

// Mock Aadhar API call - replace with actual API
const verifyAadhar = async (req, res) => {
  try {
    const { aadharNumber } = req.body;
    
    // Call Aadhar API
    const response = await axios.get(`https://aadhar-api.com/verify/${aadharNumber}`);
    
    // Generate JWT token
    const token = jwt.sign(
      { aadharNumber, userData: response.data },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ success: true, token, user: response.data });
  } catch (error) {
    res.status(400).json({ error: 'Aadhar verification failed' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Add your login logic here
    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    // Add your registration logic here
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { login, register, verifyAadhar };