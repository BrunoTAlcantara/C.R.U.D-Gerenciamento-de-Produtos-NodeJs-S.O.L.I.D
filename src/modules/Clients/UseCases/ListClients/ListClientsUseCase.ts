import { inject, injectable } from 'tsyringe';

import { IClientsRepository } from '../../repositories/IClientesRepository';

@injectable()
class ListClientsUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}
  async execute() {
    const client = await this.clientsRepository.list();
    return client;
  }
}
export { ListClientsUseCase };
