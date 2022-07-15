import { inject, injectable } from 'tsyringe';

import { Sales } from '../../../../domain/Sales/entities/Sales';
import SalesFactory from '../../../../domain/Sales/factory/sales.factory';
import {
  ICreateSalesDTO,
  IOutputCreateSalesDTO,
} from '../../dtos/ICreateSalesDto';
import { ISalesRepository } from '../../repositories/ISalesRepository';

@injectable()
class CreateSalesUseCase {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository
  ) {}
  async execute({
    clients,
    products,
    valor,
    quant,
    status,
  }: ICreateSalesDTO): Promise<IOutputCreateSalesDTO> {
    const salesFactory = SalesFactory.create(
      clients,
      products,
      valor,
      quant,
      status
    );

    await this.salesRepository.create(salesFactory as Sales);

    return {
      id: salesFactory.id,
      clients: salesFactory.clients,
      products: salesFactory.products,
      valor: salesFactory.valor,
      quant: salesFactory.quant,
      status: salesFactory.status,
    };
  }
}
export { CreateSalesUseCase };
