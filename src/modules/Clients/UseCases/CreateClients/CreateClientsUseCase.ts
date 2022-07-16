import { inject, injectable } from 'tsyringe';

import { Clients } from '../../../../domain/Clients/entities/Clients';
import ClientFactory from '../../../../domain/Clients/factory/clients.factory';
import { AppError } from '../../../../shared/errors/AppError';
import { ICreateClientsDto } from '../../dtos/ICreateClientsDto';
import { IClientsRepository } from '../../repositories/IClientesRepository';

@injectable()
class CreateClientsUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}
  async execute({ cnpj, ender, social }: ICreateClientsDto) {
    const clientsFactory = ClientFactory.create(social, ender, cnpj);

    const userAlreadyExists = await this.clientsRepository.findByCnpj(cnpj);
    if (userAlreadyExists) {
      throw new AppError('Cnpj already exists.');
    }

    this.clientsRepository.create(clientsFactory as Clients);

    return {
      id: clientsFactory.id,
      cnpj: clientsFactory.cnpj,
      ender: clientsFactory.ender,
      social: clientsFactory.social,
    };
  }
}
export { CreateClientsUseCase };
