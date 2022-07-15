import { Router } from 'express';

import { AuthenticateController } from '../../../../modules/User/useCases/Authenticate/AuthenticateController';

const authenticateonRoutes = Router();

const authenticateUseController = new AuthenticateController();

authenticateonRoutes.post('/sessions', authenticateUseController.handle);

export { authenticateonRoutes };
