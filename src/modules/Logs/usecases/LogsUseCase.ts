import { inject, injectable } from 'tsyringe';

import { Log } from '../../../domain/Logs/entities/Log';
import LogFactory from '../../../domain/Logs/factory/log.factory';
import { ILogsDto } from '../dtos/ILogsDto';
import { ILogsOutputDto } from '../dtos/ILogsOutputDto';
import { ILogRepository } from '../repositories/ILogRepository';

@injectable()
class LogsUseCase {
  constructor(
    @inject('LogsRepository')
    private logRepository: ILogRepository
  ) {}

  async execute({ log }: ILogsDto): Promise<ILogsOutputDto> {
    const logFactory = LogFactory.create(log);

    await this.logRepository.create(logFactory as Log);

    return {
      id: logFactory.id,
      log: logFactory.log,
    };
  }
}

export { LogsUseCase };
