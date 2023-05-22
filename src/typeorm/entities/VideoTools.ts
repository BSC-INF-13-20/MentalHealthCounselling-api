import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : 'videoTools'})
export class VideoTools {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    videoName:string;
   
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