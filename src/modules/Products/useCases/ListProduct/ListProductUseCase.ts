import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '../../repositories/IProductRepository';

@injectable()
class ListProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}
  async execute() {
    const client = await this.productRepository.list();
    return client;
  }
}
export { ListProductUseCase };
