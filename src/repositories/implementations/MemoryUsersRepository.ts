import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class MemoryUsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.users.find(u => u.email === email);
    return user;
  }
}
