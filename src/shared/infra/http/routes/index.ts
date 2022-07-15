import { Router } from 'express';

import { authenticateonRoutes } from './auth.routes';
import { clientsRoutes } from './clients.routes';
import { myMiddleware } from './logs.routes';
import { productRoutes } from './products.routes';
import { salesRoutes } from './sales.routes';
import { usersRoutes } from './user.routes';

const router = Router();
router.use(myMiddleware);
router.use('/users', usersRoutes);

router.use(authenticateonRoutes);

router.use('/product', productRoutes);
router.use('/clients', clientsRoutes);
router.use('/sales', salesRoutes);

export { router };
