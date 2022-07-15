import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateClientsUseCase } from './CreateClientsUseCase';

class CreateClientsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { cnpj, ender, social } = req.body;

    const createClientUseCase = container.resolve(CreateClientsUseCase);

    await createClientUseCase.execute({
      cnpj,
      ender,
      social,
    });

    return res.status(201).send();
  }
}
export { CreateClientsController };
