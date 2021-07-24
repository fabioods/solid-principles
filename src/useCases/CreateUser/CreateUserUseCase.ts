import { User } from '../../entities/User';
import { IMailProvider } from '../../providers/IMailProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const newUser = new User(data);
    const userSaved = await this.usersRepository.save(newUser);

    await this.mailProvider.sendMail({
      to: { address: data.email, name: data.name },
      from: { address: 'suporte@mail.com', name: 'Suporte' },
      subject: 'Welcome to the team',
      body: '<h1>Welcome to the team</h1>',
    });

    return userSaved;
  }
}
