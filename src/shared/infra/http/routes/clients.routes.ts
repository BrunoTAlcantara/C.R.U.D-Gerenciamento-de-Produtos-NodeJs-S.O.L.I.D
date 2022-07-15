import { Router } from 'express';

import { CreateClientsController } from '../../../../modules/Clients/UseCases/CreateClients/CreateClientsController';
import { DeleteClientsController } from '../../../../modules/Clients/UseCases/DeleteClients/DeleteClientsController';
import { ListClientsController } from '../../../../modules/Clients/UseCases/ListClients/ListClientsController';
import { UpdateClientsController } from '../../../../modules/Clients/UseCases/UpdateClients/UpdateClientsController';

const clientsRoutes = Router();
const updateClientsController = new UpdateClientsController();
const createClientsController = new CreateClientsController();
const listClientsController = new ListClientsController();
const deleteClientController = new DeleteClientsController();

clientsRoutes.post('/', createClientsController.handle);
clientsRoutes.delete('/:id', deleteClientController.handle);

clientsRoutes.put('/:id', updateClientsController.handle);

clientsRoutes.get('/', listClientsController.handle);
export { clientsRoutes };
