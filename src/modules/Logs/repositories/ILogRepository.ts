import { Log } from '../../../domain/Logs/entities/Log';

export interface ILogRepository {
  create(data: Log): Promise<void>;
}
