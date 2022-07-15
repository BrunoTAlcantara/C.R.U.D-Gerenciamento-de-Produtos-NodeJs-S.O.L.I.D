import { uuid } from 'uuidv4';

import { Sales } from '../entities/Sales';

export default class SalesFactory {
  static create(
    clients: string,
    products: string,
    valor: string,
    quant: string,
    status: boolean
  ): Sales {
    const SalesFactory = new Sales(
      uuid(),
      clients,
      products,
      valor,
      quant,
      status
    );
    return SalesFactory;
  }
}
