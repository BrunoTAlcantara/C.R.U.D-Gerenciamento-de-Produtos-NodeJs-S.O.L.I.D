import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../respositories/IUsersRepository';

interface IRequest {
  user: string;
  password: string;
}
interface IResponse {
  myUser: {
    name: string;
    user: string;
  };
  token: string;
}
@injectable()
class AuthenticateUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository
  ) {}

  async execute({ user, password }: IRequest): Promise<IResponse> {
    const myUser = await this.userRepository.findByUser(user);

    if (!myUser) {
      throw new AppError('User or password not found');
    }

    const passwordMatch = await compare(password, myUser.password);

    if (!passwordMatch) {
      throw new AppError('User or password not found');
    }

    const token = sign({}, 'e3928a3bc4be46516aa33a79bbdfdb08', {
      subject: myUser.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      myUser: {
        name: myUser.name,
        user: myUser.user,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUseCase };
