import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListProductUseCase } from './ListProductUseCase';

class ListProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listProductUseCase = container.resolve(ListProductUseCase);

    const product = await listProductUseCase.execute();

    return res.json(product);
  }
}
export { ListProductController };
