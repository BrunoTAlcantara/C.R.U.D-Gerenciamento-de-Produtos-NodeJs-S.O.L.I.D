import { uuid } from 'uuidv4';

import { Clients } from '../entities/Clients';

export default class ClientFactory {
  static create(social: string, ender: string, cnpj: number): Clients {
    const ClientsFactory = new Clients(uuid(), social, cnpj, ender);
    return ClientsFactory;
  }
}
