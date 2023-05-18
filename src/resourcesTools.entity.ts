import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ResourceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  description: string;

  // Add other columns as needed
}
