import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateClientsUseCase } from './UpdateClientsUseCase';

class UpdateClientsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const update = req.body;

    const updateClientUseCase = container.resolve(UpdateClientsUseCase);

    await updateClientUseCase.execute(
      {
        id,
      },
      update
    );

    console.log(id, update, 'CONTROLLER');
    return res.status(200).send();
  }
}
export { UpdateClientsController };
