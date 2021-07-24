type IAddress = {
  address: string;
  name: string;
};

export type IMessage = {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
};

export interface IMailProvider {
  sendMail(mail: IMessage): Promise<void>;
}
