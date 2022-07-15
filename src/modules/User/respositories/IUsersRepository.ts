import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export interface IUsersRepository {
  create(entity: ICreateUserDTO): Promise<void>;
  findByUser(user: string);
  findById(id: string);
}
