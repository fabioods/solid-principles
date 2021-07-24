import { MailTrapMailProvider } from '../../providers/implementations/MailTrapMailProvider';
import { MemoryUsersRepository } from '../../repositories/implementations/MemoryUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailTrapProvider = new MailTrapMailProvider();
const memoryUsersRepository = new MemoryUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  memoryUsersRepository,
  mailTrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
