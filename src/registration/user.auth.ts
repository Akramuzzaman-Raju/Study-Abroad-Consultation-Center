import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  // async signup(name: string, phone: string, email: string, password: string) {
  //   // See if email is in use
  //   const users = await this.usersService.find(email);
  //   if (users.length) {
  //     throw new BadRequestException('email in use');
  //   }
  //   const user = await this.usersService.create(name, phone, email, password);
  //   return user;
  // }
  // async signin(email: string, password: string) {
  //   const [user] = await this.usersService.find(email);
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }
  //   if (user.password !== password) {
  //     throw new BadRequestException('bad password');
  //   }

  //   return user;
  // }
  async signup(name: string, phone: string, email: string, password: string) {
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }

    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    const user = await this.usersService.create(name, phone, email, result);
    return user;
  }

  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('bad password');
    }

    return user;
  }
}
