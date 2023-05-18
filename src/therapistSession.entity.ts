export interface TherapistSession {
   id: number;
 therapistId: number;
    clientName: string;
 date: Date;
   duration: number;
    //Add other properties as needed
  }

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TherapistSessionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  therapistId: number;

  @Column()
  clientName: string;

  @Column()
  date: Date;

  @Column()
  duration: number;

  // Add other columns as needed
}
 