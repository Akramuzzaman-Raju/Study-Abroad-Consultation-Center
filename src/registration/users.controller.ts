import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Session,
  ValidationPipe,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from './users.service';
import { AuthService } from './user.auth';
import { LoginUserDto } from 'src/dtos/login-user.dto';
import { EmailDto } from 'src/dtos/email.dto';
import { UpdateDto } from 'src/dtos/update.dto';
import { EmailService } from 'src/email/email.service';
import { MessageService } from 'src/message/msg.service';
import { MsgDto } from 'src/dtos/msg.dto';
import { Middleware } from 'src/middleware';
@Controller('auth')
export class UsersController {
  constructor(
    private emailService: EmailService,
    private usersService: UsersService,
    private authService: AuthService,
    private messageService: MessageService,
  ) {}
  @Post('/message')
  createMessage(@Body() body: MsgDto) {
    this.messageService.create(
      body.name,
      body.cont,
    );
    return 'Messege sent to ' + body.name + ' successfully';
  }
  @Post('email')
  async sendEmail(@Body(ValidationPipe) sendEmailDto: EmailDto) {
    const { to, subject, content } = sendEmailDto;

    const mydata = {
      to: to,
      subject: subject,
      text: content,
    };
    return this.emailService.sendEmail(mydata);
  }
@Get('/profile')
@UseGuards(Middleware)
async profile(@Body() body ) {
  
  
  const user = await this.usersService.findOne(body.id);
  if (!user) {
    throw new NotFoundException("User not found");
  }
  // const { password, ...profileData } = user;
  // return profileData;
  return user;
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
    // return ' Hello ' + user.name + ' your account has been created';
    return user;

  }
  @Post('/signin')
  
  async signin(@Body() body: LoginUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    
    return user ;
  }
  @Post('/:id')
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }
  @Delete('/msg/:id')
  removeMessage(@Param('id') id: string) {
    return this.messageService.remove(parseInt(id));
  }
  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
  @Patch('/msg/:id')
  updateMessage(@Param('id') id: string, @Body() body: MsgDto) {
    return this.messageService.update(parseInt(id), body);
  }
  @Put('edit/')
  @UseGuards(Middleware)
  updateUser( @Body() body) {
    return this.usersService.update( body);
  } 
}
