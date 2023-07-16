import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  meetingId: string;
  @Column()
  meetingDate: string;
  @Column()
  meetingTime: string;
  @Column()
  meetingAgenda: string;
}
