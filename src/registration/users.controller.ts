import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Session,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from './users.service';
import { AuthService } from './user.auth';
import { LoginUserDto } from 'src/dtos/login-user.dto';
import { EmailDto } from 'src/dtos/email.dto';
import session from 'express-session';
import { EmailService } from 'src/email/email.service';
@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private emailService: EmailService,
  ) {}
  @Get('/profile')
  profile(@Session() session: any) {
    return this.usersService.findOne(session.userId);
  }
  @Post('/signout')
  logout(@Session() session: any) {
    session.userId = null;
  }
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(
      body.name,
      body.phone,
      body.email,
      body.password,
    );
    session.userId = user.id;
    return user;
  }
  @Post('/signin')
  async signin(@Body() body: LoginUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    return user;
  }
  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
  @Post('email')
  async sendEmail(@Body(ValidationPipe) sendEmailDto: EmailDto) {
    const { to, subject, content } = sendEmailDto;
    await this.emailService.sendEmail(to, subject, content);
    return { message: 'Email sent successfully' };
  }
}
