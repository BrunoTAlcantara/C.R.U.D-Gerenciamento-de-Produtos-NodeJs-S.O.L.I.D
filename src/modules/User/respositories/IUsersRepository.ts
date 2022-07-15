import { Model } from 'sequelize/types';

import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export interface IUsersRepository {
  create(entity: ICreateUserDTO): Promise<void>;
  findByUser(user: string): Promise<Model>;
  findById(id: string): Promise<Model>;
}
