import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUseCase } from './AuthenticateUseCase';

class AuthenticateController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user, password } = req.body;

    const authenticateUseCase = container.resolve(AuthenticateUseCase);

    const token = await authenticateUseCase.execute({
      user,
      password,
    });
    return res.json(token);
  }
}

export { AuthenticateController };
