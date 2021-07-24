import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { IMailProvider, IMessage } from '../IMailProvider';

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '8e4cb719026834',
        pass: '9b261fedd5c264',
      },
    });
  }

  async sendMail(mail: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        address: mail.to.address,
        name: mail.to.name,
      },
      from: {
        address: mail.from.address,
        name: mail.from.name,
      },
      subject: mail.subject,
      html: mail.body,
    });
  }
}
