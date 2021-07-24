import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password, name } = req.body;

    try {
      const user = await this.createUserUseCase.execute({
        name,
        password,
        email,
      });
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ status: 'error', message: error.message });
    }
  }
}
