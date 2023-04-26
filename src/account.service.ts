import { Injectable } from '@nestjs/common';
import { Account } from './account.entity';

@Injectable()
export class AccountService {
  private accounts: Account[] = [];

  createAccount(account: Account): void {
    this.accounts.push(account);
  }

  getAccounts(): Account[] {
    return this.accounts;
  }
}