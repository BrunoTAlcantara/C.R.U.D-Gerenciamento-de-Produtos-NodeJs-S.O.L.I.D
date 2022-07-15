import { Sales } from '../../../../../domain/Sales/entities/Sales';
import { ISalesRepository } from '../../../repositories/ISalesRepository';
import { SalesModel } from '../models/SalesModel';

class SalesRepository implements ISalesRepository {
  async create(data: Sales): Promise<void> {
    await SalesModel.create({
      id: data.id,
      products: data.products,
      clients: data.clients,
      quant: data.quant,
      valor: data.valor,
      status: data.status,
    });
  }

  async list(): Promise<any> {
    const sales = await SalesModel.findAll();
    return sales;
  }
}

export { SalesRepository };
