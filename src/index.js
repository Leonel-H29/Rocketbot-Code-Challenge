import express from 'express';
import Router from './routes/routes.js';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import { port } from './config/config.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', Router);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
