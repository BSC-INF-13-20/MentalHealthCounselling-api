import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { CreateUserparams, UpdateUserparams,  } from "src/utils/types";
import { Repository } from "typeorm";  


@Injectable()
export class UsersService{
    constructor(@InjectRepository(User) private userRepository:Repository<User>,
    
    ){}

    fetchusers(){
        return this.userRepository.find();
   
    }
    createUser(userDetails: CreateUserparams){
      const newUser=this.userRepository.create({
          ...userDetails,
          commentedOn:new Date(),
      });
      return this.userRepository.save(newUser);
  }

    updateUser(id:number,updateUserDetails:UpdateUserparams){
        return this.userRepository.update({id},{...updateUserDetails});

    }
  deleteUser(id:number){
    return this.userRepository.delete({id});
  }


}  




// createUser(userDetails: CreateUserparams){
    //     const newUSer=this.userRepository.create({
    //         ...userDetails,
    //       commentedOn:new Date(),
            
    //     });
    //     this.userRepository.save(newUSer);
    // } 






// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private userRepository: Repository<User>,
//   ) {}

//   fetchusers() {
//     return this.userRepository.find();
//   }

//   async fetchuserById(id: number): Promise<User> {
//     const user = await this.userRepository.findOne(id);
//     if (!user) {
//       throw new NotFoundException(`User with ID ${id} not found`);
//     }
//     return user;
//   }

//   createUser(userDetails: CreateUserparams) {
//     const newUser = this.userRepository.create({
//       ...userDetails,
//       createdAt: new Date(),
//     });
//     this.userRepository.save(newUser);
//   }

//   updateUser(id: number, updateUserDetails: UpdateUserparams) {
//     return this.userRepository.update({ id }, { ...updateUserDetails });
//   }

//   deleteUser(id: number) {
//     return this.userRepository.delete({ id });
//   }
// }
