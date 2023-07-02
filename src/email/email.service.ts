import { Injectable } from '@nestjs/common';

import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'smtp.gmail.com',
      auth: {
        user: 'mss.rajnikant1993@gmail.com',
        pass: 'jqpbajqwzpnardvw',
      },
    });
  }

  async sendEmail(to: string, subject: string, content: string) {
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'akraju7575@gmail.com',
      subject,
      text: content,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
