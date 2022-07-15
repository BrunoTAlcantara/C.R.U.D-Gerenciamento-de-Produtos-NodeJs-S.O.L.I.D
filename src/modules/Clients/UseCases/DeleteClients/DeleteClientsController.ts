import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteClientsUseCase } from './DeleteClientsUseCase';

class DeleteClientsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const newid = id.toString();

    const deleteClientUseCase = container.resolve(DeleteClientsUseCase);

    await deleteClientUseCase.execute({
      id: newid,
    });

    return res.status(200).send();
  }
}
export { DeleteClientsController };
