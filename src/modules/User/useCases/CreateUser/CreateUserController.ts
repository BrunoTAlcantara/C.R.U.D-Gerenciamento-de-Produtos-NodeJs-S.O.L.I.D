import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, user, password } = req.body;

    const createUserUseCase = container.resolve(CreateUserCase);

    await createUserUseCase.execute({
      name,
      user,
      password,
    });

    return res.status(201).send();
  }
}

export { CreateUserController };
