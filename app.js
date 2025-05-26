const express = require('express');
const { sequelize, initializeDatabase } = require('./config/sequelize');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

// Import routers
const usersRouter = require('./routes/users');
const healthRouter = require('./routes/health');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', usersRouter);
app.use('/health', healthRouter);

// Root endpoint
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