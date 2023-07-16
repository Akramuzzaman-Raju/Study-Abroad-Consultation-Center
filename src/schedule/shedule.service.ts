import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from './schedule.entity';
@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule) private repo: Repository<Schedule>,
  ) {}

  create(meetingId: string, meetingDate: string, meetingTime: string, meetingAgenda: string) {
    const schedule = this.repo.create({
      meetingId,
      meetingDate,
      meetingTime,
      meetingAgenda,
    });

    return this.repo.save(schedule);
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  find(meetingId: string) {
    return this.repo.findBy({ meetingId });
  }

  async update(id: number, attrs: Partial<Schedule>) {
    const schedule = await this.findOne(id);
    if (!schedule) {
      throw new NotFoundException('Meeting not found');
    }
    Object.assign(schedule, attrs);
    return this.repo.save(schedule);
  }

  async remove(id: number) {
    const schedule = await this.findOne(id);
    if (!schedule) {
      throw new NotFoundException('meeting not found');
    }
    return this.repo.remove(schedule);
  }
}
