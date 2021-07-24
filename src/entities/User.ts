import { v4 as uuid } from 'uuid';

export class User {
  readonly id: string;

  name: string;

  email: string;

  password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    this.id = id || uuid();
    Object.assign(this, props);
  }
}
