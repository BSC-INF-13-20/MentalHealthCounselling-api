import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.modules";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import {  User } from "./typeorm/entities/User";
import { AccountsModule } from './accounts/accounts.module';
import { Account } from "./typeorm/entities/accounts";
//import { VideoToolsModule } from './tools/VideoTools.module';
//import { SessionModule } from './session/session.module';

@Module({
  imports:[TypeOrmModule.forRoot({
    type:'mariadb',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'onlinementalhealth',
    entities:[User,Account],
    synchronize:true,

  }),UsersModule, AccountsModule],
  controllers:[AppController],
  providers:[AppService]

})
export class AppModule{}
