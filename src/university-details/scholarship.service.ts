import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Scholarship } from './scholarship.entity';
@Injectable()
export class ScholarshipService {
  constructor(
    @InjectRepository(Scholarship) private repo: Repository<Scholarship>,
  ) {}

  create(scholarshipId: string, universityName: string, eligibleCourse: string, possibleScholarship: string) {
    const scholarship = this.repo.create({
        scholarshipId,
        universityName,
        eligibleCourse,
        possibleScholarship,
    });

    return this.repo.save(scholarship);
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  find(scholarshipId: string) {
    return this.repo.findBy({ scholarshipId });
  }

  async update(id: number, attrs: Partial<Scholarship>) {
    const scholarship = await this.findOne(id);
    if (!scholarship) {
      throw new NotFoundException('Scholarship not found');
    }
    Object.assign(scholarship, attrs);
    return this.repo.save(scholarship);
  }

  async remove(id: number) {
    const scholarship = await this.findOne(id);
    if (!scholarship) {
      throw new NotFoundException('Scholarship not found');
    }
    return this.repo.remove(scholarship);
  }
}
