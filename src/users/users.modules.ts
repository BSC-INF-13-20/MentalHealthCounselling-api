import {  Module } from "@nestjs/common";
import { UsersController } from "./controllers/users/users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { UsersService } from "./services/users.services";

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[UsersController],
    providers:[UsersService],


})
export class UsersModule{}