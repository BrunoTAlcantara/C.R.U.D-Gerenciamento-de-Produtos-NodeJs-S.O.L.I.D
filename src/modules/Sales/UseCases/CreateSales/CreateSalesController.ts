import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSalesUseCase } from './CreateSalesUseCase';

class CreateSalesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { clients, products, quant, valor, status } = req.body;

    const createsalesUseCase = container.resolve(CreateSalesUseCase);

    await createsalesUseCase.execute({
      clients,
      products,
      quant,
      valor,
      status,
    });

    return res.status(201).send();
  }
}

export { CreateSalesController };
