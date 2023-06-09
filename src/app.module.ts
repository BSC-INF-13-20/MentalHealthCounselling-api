import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.modules";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import {  User } from "./typeorm/entities/User";
import { AccountsModule } from './accounts/accounts.module';
import { Account } from "./typeorm/entities/accounts";
import { VideoTools } from "./typeorm/entities/VideoTools";
// import { TherapistSession } from "./typeorm/entities/therapistSession";
// import { TherapistSessionModule } from "./therapistSession/therapistSession.module";
import { VideoToolsModel } from "./tools/VideoTools.module";

@Module({
  imports:[TypeOrmModule.forRoot({
    type:'mysql',
    host:'sql10.freesqldatabase.com',
    port:3306,
    username:'sql10624759',
    password:'UupbC4YS7p',
    database:'sql10624759',
    entities:[User,Account,VideoTools],
    synchronize:true,
    // autoLoadEntities:true,

  }),UsersModule, AccountsModule,VideoToolsModel],
  controllers:[AppController],
  providers:[AppService]

})
export class AppModule{}
