import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Consultant } from '../consultant/consultant.entity';
import { AuthService } from './user.auth';
import { EmailService } from 'src/email/email.service';
import { ConsultantService } from 'src/consultant/consultant.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Consultant])],
  controllers: [UsersController],
  providers: [UsersService, AuthService, EmailService, ConsultantService],
})
export class UsersModule {}
