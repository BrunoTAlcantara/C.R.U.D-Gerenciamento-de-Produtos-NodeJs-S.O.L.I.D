import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { User } from '../../../../domain/Users/entities/User';
import UserFactory from '../../../../domain/Users/factory/users.factory';
import { AppError } from '../../../../shared/errors/AppError';
import {
  ICreateUserDTO,
  IOutputCreateUserDTO,
} from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../respositories/IUsersRepository';

@injectable()
class CreateUserCase {
  constructor(
    @inject('SalesRepository')
    private userRepository: IUsersRepository
  ) {}
  async execute({
    name,
    user,
    password,
  }: ICreateUserDTO): Promise<IOutputCreateUserDTO> {
    const userAlreadyExists = await this.userRepository.findByUser(user);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }
    const passwordHash = await hash(password, 8);
    const userFactory = UserFactory.create(name, user, passwordHash);

    await this.userRepository.create(userFactory as User);

    return {
      id: userFactory.id,
      name: userFactory.name,
      user: userFactory.user,
      password: userFactory.password,
    };
  }
}
export { CreateUserCase };
