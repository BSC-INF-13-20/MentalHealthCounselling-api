import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAccountDto } from 'src/accounts/CreateAccount.dto';
import { UpdateAccountDto } from 'src/accounts/UpdateAccount.dto';
import { AccountsService } from 'src/accounts/services/accounts/accounts.service';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';
@ApiTags('ACCOUNTS')
@Controller('accounts')
export class AccountsController {
    
    constructor(private accountsServices: AccountsService){}

    @Get()
 async   getAccounts(){
    const accounts=await this.accountsServices.findaccounts();
    return accounts;
 }


 @Post() 
createAccount(@Body() createAccountDto:CreateAccountDto){
    // return this.accountsServices.createAccount(createAccountDto);
    return this.accountsServices.createAccount(createAccountDto)
 }


 @Put(':id')
 async updateAccountById(@Param('id',ParseIntPipe)id:number,
 @Body() UpdateAccountDto: UpdateAccountDto,
 ){
  await this.accountsServices.updateAccount(id,UpdateAccountDto)
  
 }
 //delete users in my database
@Delete(':id')
async deleteAccountsById(@Param('id',ParseIntPipe) id:number){

  await this.accountsServices.deleteAccounts(id);
}



}
