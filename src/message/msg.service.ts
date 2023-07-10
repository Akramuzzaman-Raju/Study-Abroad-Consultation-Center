import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './msg.entity';
@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private repo: Repository<Message>,
  ) {}

  create(name: string, cont: string) {
   // console.log("create", name, content );
    const message = this.repo.create({
      name,
      cont,
    });

    return this.repo.save(message);
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  find(name: string) {
    return this.repo.findBy({ name });
  }

  async update(id: number, attrs: Partial<Message>) {
    const message = await this.findOne(id);
    if (!message) {
      throw new NotFoundException('user not found');
    }
    Object.assign(message, attrs);
    return this.repo.save(message);
  }

  async remove(id: number) {
    const message = await this.findOne(id);
    if (!message) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(message);
  }
}
