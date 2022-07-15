import { Products } from '../../../../../domain/Products/entities/Produts';
import { IProductRepository } from '../../../repositories/IProductRepository';
import { ProductModel } from '../models/ProductModel';

class ProductRepository implements IProductRepository {
  async create(data: Products): Promise<void> {
    await ProductModel.create({
      id: data.id,
      desc: data.desc,
      unMed: data.unMed,
      preco: data.preco,
      valor: data.valor,
    });
  }

  async list(): Promise<any> {
    const product = await ProductModel.findAll();
    return product;
  }
  async delete(id: string): Promise<void> {
    await ProductModel.destroy({ where: { id } });
  }
  async update({ id }, update): Promise<void> {
    console.log(id, update, 'Repository');

    await ProductModel.update(update, { where: { id } });
  }
}

export { ProductRepository };
