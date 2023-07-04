import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Consultant } from '../consultant/consultant.entity';
import { AuthService } from './user.auth';
import { EmailService } from 'src/email/email.service';
import { ConsultantService } from 'src/consultant/consultant.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Consultant]),
    MailerModule.forRoot({
      transport: {
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
          user: 'akraju7575@gmail.com',
          pass: 'cdhbrmsjmlkxrhzz',
        },
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService, EmailService, ConsultantService],
})
export class UsersModule {}
