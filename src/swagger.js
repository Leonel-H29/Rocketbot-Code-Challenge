import swaggerJsdoc from 'swagger-jsdoc';

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
        url: 'http://localhost:3000/api',
        description: 'Development Server',
      },
    ],
  },
  apis: ['./src/**/routes/*.js'],
};

const specs = swaggerJsdoc(options);

export default specs;
