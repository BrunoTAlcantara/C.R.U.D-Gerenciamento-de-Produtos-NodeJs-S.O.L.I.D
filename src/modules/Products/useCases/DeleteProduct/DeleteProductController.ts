import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteProductUseCase } from './DeleteProductUseCase';

class DeleteProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteClientUseCase = container.resolve(DeleteProductUseCase);

    await deleteClientUseCase.execute({
      id,
    });

    return res.status(200).send();
  }
}
export { DeleteProductController };
