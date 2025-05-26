const express = require('express');
const { sequelize } = require('../config/sequelize');
const router = express.Router();

// Health check endpoint
router.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({
      success: true,
      message: 'Server and database are healthy',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(500).json({
      success: false,
      error: 'Database connection failed',
      timestamp: new Date().toISOString()
    });
  }
});

module.exports = router;