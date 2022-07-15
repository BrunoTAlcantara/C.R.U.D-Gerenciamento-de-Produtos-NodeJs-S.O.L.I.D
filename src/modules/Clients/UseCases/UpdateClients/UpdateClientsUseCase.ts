import { inject, injectable } from 'tsyringe';

import { IClientsRepository } from '../../repositories/IClientesRepository';

@injectable()
class UpdateClientsUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}
  async execute({ id }, update) {
    await this.clientsRepository.update({ id }, update);
  }
}
export { UpdateClientsUseCase };
