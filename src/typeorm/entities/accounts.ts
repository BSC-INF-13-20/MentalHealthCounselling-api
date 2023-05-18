import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'accounts'})
export class Account{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    username:string;

    @Column()
     email:string;

     @Column()
     address:string;

    //  @Column()
    //  comments:string;

    // @Column()
    // commentedOn:Date;

    @Column()
    password:string;

    @Column({nullable:true})
    authstrategy:string;

}
