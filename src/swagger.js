import swaggerJsdoc from 'swagger-jsdoc';
import { port } from './config/config.js';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Authentication API',
      version: '1.0.0',
      description:
        'This is an authentication API built with Express and documented using Swagger',
    },
    servers: [
      {
        url: `http://localhost:${port}/api`,
        description: 'Development Server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/**/routes/*.js'],
};

const specs = swaggerJsdoc(options);

export default specs;
