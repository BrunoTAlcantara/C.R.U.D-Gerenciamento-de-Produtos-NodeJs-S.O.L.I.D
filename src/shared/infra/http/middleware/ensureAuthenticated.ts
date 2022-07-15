import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../../../../modules/User/infra/sequelize/repositories/UserRepository';
import { AppError } from '../../../errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }
  const [, token] = authHeader.split(' ');
  try {
    const { sub: user_id } = verify(
      token,
      'e3928a3bc4be46516aa33a79bbdfdb08'
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) {
      throw new AppError('User does not exist', 401);
    }

    next();
  } catch {
    throw new AppError('Invalid Token', 401);
  }
}
