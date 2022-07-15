import { inject, injectable } from 'tsyringe';

import { IDeleteClientsDto } from '../../dtos/IDeleteClientsDto';
import { IClientsRepository } from '../../repositories/IClientesRepository';

@injectable()
class DeleteClientsUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) {}
  async execute({ id }: IDeleteClientsDto) {
    await this.clientsRepository.delete(id);
  }
}
export { DeleteClientsUseCase };
