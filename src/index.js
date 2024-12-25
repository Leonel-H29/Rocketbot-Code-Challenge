import express from 'express';
import Router from './routes/routes.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', Router);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/*
const authRoutes = require('./routes/authRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
*/
