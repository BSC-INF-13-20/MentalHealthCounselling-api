import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/typeorm/entities/accounts';
import { CreateAccountparams, UpdateAccountparams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
    constructor (@InjectRepository(Account) private accountsRepository:Repository<Account>,
    ){}

findaccounts(){
    return this.accountsRepository.find();

}


createAccount(accountsDetails: CreateAccountparams){
    const newAccount=this.accountsRepository.create({
        ...accountsDetails,
        // commentedOn:new Date(),
    });
    return this.accountsRepository.save(newAccount);
}

 
updateAccount(id:number,updateAccountDetails:UpdateAccountparams){
    return this.accountsRepository.update({id},{...updateAccountDetails});

}
deleteAccounts(id:number){
return this.accountsRepository.delete({id});
}


}  







