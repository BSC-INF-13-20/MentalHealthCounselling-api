import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";



 @Entity({name:'resource'})

export class Account{
    @PrimaryGeneratedColumn()
    id:number;


    @Column()
    videos:string;

    @Column()
    images:string;
}