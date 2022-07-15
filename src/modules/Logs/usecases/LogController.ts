import { container } from 'tsyringe';

import { load, del } from '../../../shared/infra/http/express';
import { LogsUseCase } from './LogsUseCase';

class LogController {
  async handle(): Promise<void> {
    const logsUseCase = container.resolve(LogsUseCase);
    const log = load();

    console.log(log);

    logsUseCase.execute({
      log,
    });
    del();
  }
}
export { LogController };
