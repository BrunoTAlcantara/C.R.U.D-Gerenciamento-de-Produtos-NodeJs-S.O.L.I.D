import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProductUserCase } from './CreateProductUserCase';

class CreateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { desc, unMed, preco, valor } = req.body;

    const createProduUsername = container.resolve(CreateProductUserCase);
    await createProduUsername.execute({
      desc,
      unMed,
      preco,
      valor,
    });

    return res.status(201).send();
  }
}

export { CreateProductController };
