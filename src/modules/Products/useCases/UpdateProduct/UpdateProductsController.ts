import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateProductUseCase } from './UpdateProductUseCase';

class UpdateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const update = req.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    await updateProductUseCase.execute(
      {
        id,
      },
      update
    );

    console.log(id, update, 'CONTROLLER');
    return res.status(200).send();
  }
}
export { UpdateProductController };
