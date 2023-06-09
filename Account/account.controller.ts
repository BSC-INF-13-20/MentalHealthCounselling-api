import { Controller, Get, Post, Body } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account.entity';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('/')
  createAccount(@Body() account: Account): void {
    this.accountService.createAccount(account);
  }

  @Get()
  getAccounts(): Account[] {
    return this.accountService.getAccounts();
  }
}