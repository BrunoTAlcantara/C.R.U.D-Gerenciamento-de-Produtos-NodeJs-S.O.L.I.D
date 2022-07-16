import { inject, injectable } from 'tsyringe';

import { IProductRepository } from '../../repositories/IProductRepository';

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject('ProductRepository')
    private clientsRepository: IProductRepository
  ) {}
  async execute({ id }, update) {
    await this.clientsRepository.update({ id }, update);
    console.log(id, update, 'USECASE');
  }
}
export { UpdateProductUseCase };
