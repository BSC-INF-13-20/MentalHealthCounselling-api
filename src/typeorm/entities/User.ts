import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class User{
    //implementation
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    username:string;

    @Column()
     email:string;

     @Column()
     address:string;

     @Column()
     comments:string;

    @Column()
    commentedOn:Date;

    @Column()
    password:string;

    @Column({nullable:true})
    authstrategy:string;

}
