import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//import { TherapistSession} from "./therapistSession.controller";


@Entity({name : 'TherapistSession'})
    export class TherapistSessionEntity    {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    title: String;

    @Column()
    subject: String;

    @Column()
    instructor: String;

    @Column()
    topic: String;

    @Column()
    language: String;

}