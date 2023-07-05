
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
// import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(mydata) {
    return this.mailerService.sendMail({
      to: mydata.to,
      subject: mydata.subject,
      text: mydata.text,
     
    })
  }
}


