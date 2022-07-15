import { container } from 'tsyringe';

import { ClientsRepository } from '../../modules/Clients/infra/sequelize/repositories/ClientsRepository';
import { IClientsRepository } from '../../modules/Clients/repositories/IClientesRepository';
import { LogsRepository } from '../../modules/Logs/infra/sequelize/repositories/LogsRepository';
import { ILogRepository } from '../../modules/Logs/repositories/ILogRepository';
import { ProductRepository } from '../../modules/Products/infra/sequelize/repositories/ProductRepository';
import { IProductRepository } from '../../modules/Products/repositories/IProductRepository';
import { SalesRepository } from '../../modules/Sales/infra/sequelize/repositories/SalesRepository';
import { ISalesRepository } from '../../modules/Sales/repositories/ISalesRepository';
import { UsersRepository } from '../../modules/User/infra/sequelize/repositories/UserRepository';
import { IUsersRepository } from '../../modules/User/respositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<ISalesRepository>(
  'SalesRepository',
  SalesRepository
);

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository
);

container.registerSingleton<ILogRepository>('LogsRepository', LogsRepository);

container.registerSingleton<IClientsRepository>(
  'ClientsRepository',
  ClientsRepository
);
