import { uuid } from 'uuidv4';

import { User } from '../entities/User';

export default class UserFactory {
  static create(name: string, user: string, password: string): User {
    const UserFactory = new User(uuid(), name, user, password);
    return UserFactory;
  }
}
