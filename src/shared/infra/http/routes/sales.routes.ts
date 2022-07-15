import { Router } from 'express';

import { CreateSalesController } from '../../../../modules/Sales/UseCases/CreateSales/CreateSalesController';
import { ListSalesController } from '../../../../modules/Sales/UseCases/ListSales/ListSalesController';

const salesRoutes = Router();

const salesCreateController = new CreateSalesController();
const salesListController = new ListSalesController();

salesRoutes.post('/', salesCreateController.handle);
salesRoutes.get('/', salesListController.handle);

export { salesRoutes };
