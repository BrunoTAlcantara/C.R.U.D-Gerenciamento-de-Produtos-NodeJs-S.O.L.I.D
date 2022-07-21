import { inject, injectable } from 'tsyringe';

import { Products } from '../../../../domain/Products/entities/Produts';
import { ProdutsFactory } from '../../../../domain/Products/factory/product.factory';
import { IOutputProductsDto } from '../../dtos/IOutputProductsDto copy';
import { IProductsDto } from '../../dtos/IProductsDto';
import { IProductRepository } from '../../repositories/IProductRepository';

@injectable()
class CreateProductUserCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}
  desc: string;
  unMed: string;
  preco: number;
  valor: number;
  async execute({
    desc,
    unMed,
    preco,
    valor,
  }: IProductsDto): Promise<IOutputProductsDto> {
    const productFactory = ProdutsFactory.create(desc, unMed, preco, valor);
    await this.productRepository.create(productFactory as Products);

    return {
      id: productFactory.id,
      desc: productFactory.desc,
      unMed: productFactory.unMed,
      preco: productFactory.preco,
      valor: productFactory.valor,
    };
  }
}

export { CreateProductUserCase };
