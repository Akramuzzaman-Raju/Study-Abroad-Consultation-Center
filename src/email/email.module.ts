import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
//import * as nodemailer from 'nodemailer';
import { UsersController } from 'src/registration/users.controller';
import { UsersService } from 'src/registration/users.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'mss.rajnikant1993@gmail.com',
          pass: 'jqpbajqwzpnardvw',
        },
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class EmailModule {}
