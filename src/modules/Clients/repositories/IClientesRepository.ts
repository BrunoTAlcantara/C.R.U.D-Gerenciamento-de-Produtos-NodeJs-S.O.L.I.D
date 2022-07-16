import { ICreateClientsDto } from '../dtos/ICreateClientsDto';

export interface IClientsRepository {
  create(entity: ICreateClientsDto): Promise<void>;
  list(): Promise<any>;
  delete(id: string): Promise<void>;
  update(update, id: string): Promise<void>;
  findByCnpj(cnpj: number);
}
