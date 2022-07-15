import { uuid } from 'uuidv4';

import { Log } from '../entities/Log';

export default class UserFactory {
  static create(log: string): Log {
    const UserFactory = new Log(uuid(), log);
    return UserFactory;
  }
}
