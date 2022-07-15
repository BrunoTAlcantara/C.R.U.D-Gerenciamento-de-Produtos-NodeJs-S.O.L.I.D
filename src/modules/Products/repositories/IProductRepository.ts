import { IProductsDto } from '../dtos/IProductsDto';

export interface IProductRepository {
  create(entity: IProductsDto): Promise<void>;
  list(): Promise<any>;
  delete(id: string): Promise<void>;
  update(update, id: string): Promise<void>;
}
