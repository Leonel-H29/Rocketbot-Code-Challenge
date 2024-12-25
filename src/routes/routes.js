import authRoutes from '../modules/auth/infrastructure/routes/auth.routes.js';
import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => res.send('API is running...'));
router.use(authRoutes);

export default router;
