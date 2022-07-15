import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSalesUseCase } from './ListSalesUseCase';

class ListSalesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createsalesUseCase = container.resolve(ListSalesUseCase);

    const sales = await createsalesUseCase.execute();

    return res.json(sales);
  }
}

export { ListSalesController };
