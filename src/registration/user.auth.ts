import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async signup(name: string, phone: string, email: string, password: string) {
    // See if email is in use
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }
    const user = await this.usersService.create(name, phone, email, password);

    // return the user
    return user;
  }
  //
  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    if (user.password !== password) {
      throw new BadRequestException('bad password');
    }

    return user;
  }
}
