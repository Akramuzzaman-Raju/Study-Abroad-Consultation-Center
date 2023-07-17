import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Scholarship {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  scholarshipId: string;
  @Column()
  universityName: string;
  @Column()
  eligibleCourse: string;
  @Column()
  possibleScholarship: string;
}
