import authRoutes from '../modules/auth/infrastructure/routes/auth.routes.js';
import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Check if the server is up and running
 *     responses:
 *       200:
 *         description: API is running...
 */
router.get('/', (_, res) => res.send('API is running...'));
router.use(authRoutes);

export default router;
