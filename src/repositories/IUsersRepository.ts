import { User } from '../entities/User';

export interface IUsersRepository {
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
