import { inject, injectable } from 'tsyringe';

import { ISalesRepository } from '../../repositories/ISalesRepository';

@injectable()
class ListSalesUseCase {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository
  ) {}
  async execute() {
    const client = await this.salesRepository.list();
    return client;
  }
}
export { ListSalesUseCase };
