import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { CreateUserDto } from "src/users/dtos/CreateUser.dto";
import { UpdateUserDto } from "src/users/dtos/updateUser.dto";
import { UsersService } from "src/users/services/users.services";


@Controller('users')
export class UsersController{
    constructor(private userService:UsersService
    ){}

    @Get()
    async getusers(){
        const users=await this.userService.fetchusers();
        return users;
    }
    


//posting our data
    @Post() 
    createUser(@Body() createUserDto:CreateUserDto){
       return this.userService.createUser(createUserDto);
    }
    //updating our data
   @Put(':id')
   async updateUserById(@Param('id',ParseIntPipe)id:number,
   @Body() UpdateUserDto:UpdateUserDto,
   ){
    await this.userService.updateUser(id,UpdateUserDto)
    
   }
   //delete users in my database
  @Delete(':id')
  async deleteUserById(@Param('id',ParseIntPipe) id:number){

    await this.userService.deleteUser(id);
  }
    

   }
 
