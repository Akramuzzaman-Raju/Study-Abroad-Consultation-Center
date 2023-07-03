import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Consultant } from './consultant.entity';
@Injectable()
export class ConsultantService {
  constructor(
    @InjectRepository(Consultant) private repo: Repository<Consultant>,
  ) {}

  create(name: string, phone: string, email: string, country: string) {
    const consultant = this.repo.create({
      name,
      phone,
      email,
      country,
    });

    return this.repo.save(consultant);
  }
  findOne(country: string) {
    if (!country) {
      return null;
    }
    return this.repo.findOneBy({ country });
  }
  find(country: string) {
    return this.repo.findBy({ country });
  }
}
