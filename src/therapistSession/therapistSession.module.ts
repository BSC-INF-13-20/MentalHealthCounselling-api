
import { Module } from '@nestjs/common';
//import { AccountsController } from './controllers/accounts/accounts.controller';
//import { AccountsService } from './services/accounts/accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { Account } from 'src/typeorm/entities/accounts';
import { TherapistSessionService } from './services/therapistSession.service';
import { TherapistSessionController } from './controllers/therapistSession.controller';
import { TherapistSession } from 'src/typeorm/entities/therapistSession';

@Module({
  imports: [TypeOrmModule.forFeature([TherapistSession])],
  controllers: [TherapistSessionController],
  providers: [TherapistSessionService]
})
export class TherapistSessionModule {}
