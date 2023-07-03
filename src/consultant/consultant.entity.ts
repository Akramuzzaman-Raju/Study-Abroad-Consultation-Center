import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('consultant')
export class Consultant {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  phone: string;
  @Column()
  email: string;
  @Column()
  country: string;
}
