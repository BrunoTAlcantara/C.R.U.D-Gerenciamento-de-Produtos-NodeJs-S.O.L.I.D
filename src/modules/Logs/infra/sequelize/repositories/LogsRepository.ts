import { Log } from '../../../../../domain/Logs/entities/Log';
import { ILogRepository } from '../../../repositories/ILogRepository';
import { LogModel } from '../models/LogModel';

class LogsRepository implements ILogRepository {
  async create(data: Log): Promise<void> {
    await LogModel.create({
      id: data.id,
      log: data.log,
    });
  }
}

export { LogsRepository };
