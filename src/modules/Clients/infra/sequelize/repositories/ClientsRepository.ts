import { Clients } from '../../../../../domain/Clients/entities/Clients';
import { IClientsRepository } from '../../../repositories/IClientesRepository';
import { ClientsModel } from '../models/ClientsModel';

class ClientsRepository implements IClientsRepository {
  async create(data: Clients): Promise<void> {
    await ClientsModel.create({
      id: data.id,
      cnpj: data.cnpj,
      social: data.social,
      ender: data.ender,
    });
  }
  async list(): Promise<any> {
    const clients = await ClientsModel.findAll();
    return clients;
  }


  async findByCnpj(cnpj: number)  {
    const savedCnpj = await ClientsModel.findOne({ where: { cnpj } });

    return savedCnpj;
  }

  async delete(id: string): Promise<void> {
    await ClientsModel.destroy({ where: { id } });
  }
  async update({ id }, update): Promise<void> {
    console.log(id, update, 'Repository');

    await ClientsModel.update(update, { where: { id } });
  }
}
export { ClientsRepository };
