import { Module } from '@nestjs/common';
import { AccountsController } from './controllers/accounts/accounts.controller';
import { AccountsService } from './services/accounts/accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/typeorm/entities/accounts';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
