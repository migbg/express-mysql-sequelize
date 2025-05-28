const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express MySQL with Sequelize API',
      version: '1.0.0',
      description: 'A simple Express API with MySQL integration using Sequelize.'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['name', 'email'],
          properties: {
            id: {
              type: 'integer',
              description: 'Auto-generated user ID'
            },
            name: {
              type: 'string',
              description: 'User full name',
              example: 'John Doe'
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'User email address',
              example: 'john.doe@example.com'
            },
            age: {
              type: 'integer',
              minimum: 0,
              maximum: 150,
              description: 'User age (optional)',
              example: 30
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'User creation timestamp'
            }
          }
        },
        UserInput: {
          type: 'object',
          required: ['name', 'email'],
          properties: {
            name: {
              type: 'string',
              description: 'User full name',
              example: 'John Doe'
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'User email address',
              example: 'john.doe@example.com'
            },
            age: {
              type: 'integer',
              minimum: 0,
              maximum: 150,
              description: 'User age (optional)',
              example: 30
            }
          }
        },
        ApiResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              description: 'Request success status'
            },
            data: {
              description: 'Response data'
            },
            error: {
              type: 'string',
              description: 'Error message (when success is false)'
            },
            message: {
              type: 'string',
              description: 'Success message'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            error: {
              type: 'string',
              description: 'Error description'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js', './app.js'] // Rutas donde están los comentarios JSDoc
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };