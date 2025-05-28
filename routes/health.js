/**
 * @swagger
 * components:
 *   tags:
 *     - name: Health
 *       description: Health check operations
 */
const express = require('express');
const { sequelize } = require('../config/sequelize');
const router = express.Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check
 *     description: Check if the server and database are running properly
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Service is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Server and database are healthy"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Service is unhealthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Database connection failed"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
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