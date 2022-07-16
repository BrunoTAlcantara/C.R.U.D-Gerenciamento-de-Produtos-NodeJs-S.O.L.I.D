import { Router } from 'express';




import { CreateProductController } from '../../../../modules/Products/useCases/CreateProduct/CreateProductController';
import { DeleteProductController } from '../../../../modules/Products/useCases/DeleteProduct/DeleteProductController';
import { ListProductController } from '../../../../modules/Products/useCases/ListProduct/ListClientsController';
import { UpdateProductController } from '../../../../modules/Products/useCases/UpdateClients/UpdateClientsController';

const productRoutes = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productRoutes.put('/:id', updateProductController.handle);

productRoutes.delete('/:id', deleteProductController.handle);

productRoutes.post('/', createProductController.handle);
productRoutes.get('/', listProductController.handle);

export { productRoutes };
