import { Model } from 'sequelize/types';

import { User } from '../../../../../domain/Users/entities/User';
import { IUsersRepository } from '../../../respositories/IUsersRepository';
import { UserModel } from '../models/UserModel';

class UsersRepository implements IUsersRepository {
  async create(data: User): Promise<void> {
    await UserModel.create({
      id: data.id,
      name: data.name,
      user: data.user,
      password: data.password,
    });
  }

  async findByUser(user: string): Promise<Model> {
    console.log(user, '############################');
    const savedUser = await UserModel.findOne({ where: { user } });

    return savedUser;
  }
  async findById(id: string): Promise<Model> {
    const userId = await UserModel.findOne({ where: { id } });
    return userId;
  }
}

export { UsersRepository };
