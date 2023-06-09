// import { Injectable, Session } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { TherapistSession} from 'src/typeorm/entities/therapistSession';
// import { CreateTherapistSessionparams, UpdateTherapistSessionparams } from 'src/utils/types';
// import { Repository } from 'typeorm';
// import { UpdatetherapySessionDto } from '../dtos/UpdatetherapistSession.dto';

// @Injectable()
// export class TherapistSessionService {
//   [x: string]: any;
//   getAllSessions: any;
//   createSession: any;
//   updateTherapistSession: any;
  
//     constructor (@InjectRepository(TherapistSession) private readonly therapistSessionRepository:Repository<TherapistSession>,
//     ){}

// findtherapistSession(){
//     return this.therapistSessionRepository.find();

// }


// create(therapistSessionDetails:TherapistSession):Promise<TherapistSession>{
//    return this.therapistSessionRepository.save(therapistSessionDetails);
// }

 
// updateAccount(id:number,updateAccountDetails:UpdateTherapistSessionparams){
//    return this.therapistSessionRepository.update({id},{...updateAccountDetails});

// }
// deleteAccounts(id:number){
// return this.therapistSessionRepository.delete({id});
// }
// }