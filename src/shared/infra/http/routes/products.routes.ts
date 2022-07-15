import { Router } from 'express';

import { DeleteClientsController } from '../../../../modules/Clients/UseCases/DeleteClients/DeleteClientsController';
import { ListClientsController } from '../../../../modules/Clients/UseCases/ListClients/ListClientsController';
import { UpdateClientsController } from '../../../../modules/Clients/UseCases/UpdateClients/UpdateClientsController';
import { CreateProductController } from '../../../../modules/Products/useCases/CreateProduct/CreateProductController';
import { DeleteProductController } from '../../../../modules/Products/useCases/DeleteProduct/DeleteProductController';
import { UpdateProductController } from '../../../../modules/Products/useCases/UpdateClients/UpdateClientsController';

const productRoutes = Router();

const createProductController = new CreateProductController();
const listProductController = new ListClientsController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productRoutes.put('/:id', updateProductController.handle);

productRoutes.delete('/:id', deleteProductController.handle);

productRoutes.post('/', createProductController.handle);
productRoutes.get('/', listProductController.handle);

export { productRoutes };
