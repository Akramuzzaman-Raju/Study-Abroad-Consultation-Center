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
import { MessageService } from 'src/message/msg.service';
import { Message } from 'src/message/msg.entity';
import { ScheduleService } from 'src/schedule/shedule.service';
import { Schedule } from 'src/schedule/schedule.entity';
import { ScheduleController } from 'src/schedule/schedule.controller';
import { ConsultantController } from 'src/consultant/consultant.controller';
import { ScholarshipController } from 'src/university-details/scholarship.controllar';
import { ScholarshipService } from 'src/university-details/scholarship.service';
import { Scholarship } from 'src/university-details/scholarship.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Consultant, Message, Schedule, Scholarship]),
    MailerModule.forRoot({
      transport: {
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
          user: 'akraju7575@gmail.com',
          pass: 'qwssozvnqlilcovn',
        },
      },
    }),
  ],
  controllers: [UsersController, ScheduleController, ConsultantController, ScholarshipController],
  providers: [UsersService, AuthService, EmailService, ConsultantService, MessageService, ScheduleService, ScholarshipService],
})
export class UsersModule {}
