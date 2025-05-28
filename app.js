const express = require('express');
const { sequelize, initializeDatabase } = require('./config/sequelize');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
const { specs, swaggerUi } = require('./config/swagger');

// Import routers
const usersRouter = require('./routes/users');
const healthRouter = require('./routes/health');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "Express MySQL API Documentation"
}));

// Routes
app.use('/users', usersRouter);
app.use('/health', healthRouter);

/**
 * @swagger
 * /:
 *   get:
 *     summary: API Information
 *     description: Returns basic information about the API
 *     tags: [General]
 *     responses:
 *       200:
 *         description: API information retrieved successfully
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
 *                   example: "Express MySQL API Server (Express 5.x)"
 *                 version:
 *                   type: string
 *                   example: "1.0.0"
 *                 expressVersion:
 *                   type: string
 *                   example: "5.1.0"
 *                 endpoints:
 *                   type: object
 *                   properties:
 *                     users:
 *                       type: string
 *                       example: "/users"
 *                     health:
 *                       type: string
 *                       example: "/health"
 */
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Express MySQL API Server - Sequelize',
    version: '1.0.0',
    endpoints: {
      users: '/users',
      health: '/health'
    }
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);
app.use('*', notFoundHandler);

// Start server
async function startServer() {
  try {
    await initializeDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/health`);
      console.log(`Users API: http://localhost:${PORT}/users`);
      console.log(`Swagger API Documentation: http://localhost:${PORT}/api-docs`)
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  await sequelize.close();
  process.exit(0);
});