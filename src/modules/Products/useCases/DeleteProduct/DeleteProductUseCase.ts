import { inject, injectable } from 'tsyringe';

import { IDeleteProductDto } from '../../dtos/IDeleteProductDto';
import { IProductRepository } from '../../repositories/IProductRepository';

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository
  ) {}
  async execute({ id }: IDeleteProductDto) {
    await this.productRepository.delete(id);
  }
}
export { DeleteProductUseCase };
