import { uuid } from 'uuidv4';

import { Products } from '../entities/Produts';

export class ProdutsFactory {
  static create(
    desc: string,
    unMed: string,
    preco: number,
    valor: number
  ): Products {
    const productFactory = new Products(uuid(), desc, unMed, preco, valor);
    return productFactory;
  }
}
