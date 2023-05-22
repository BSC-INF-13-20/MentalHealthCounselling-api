import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'therapistSession'})
export class TherapistSession{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    username:string;

    @Column()
     email:string;

     @Column()
    // address:string;
    
    @Column()
    duration:string;

}
