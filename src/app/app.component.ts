import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { filter } from 'rxjs/operators';
import { ACCOUNT } from './data';

import { Account, Transactions } from './models/account.model';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'bank-app';
  visibleTransactions: Transactions[] = [];
  
  account: Account = ACCOUNT;
  tran: Transactions[] = [
    {
            type: "",
            description: "",
            amount: 0
    }
  ];
  // account: Account = {
  //   ownerName: "Jon",
  //   ownerLastName: "Snow",
  //   totalBalance: 2000,
  //   transactions: [
  //     {
  //       type: "debit",
  //       description: "Deposit",
  //       amount: 100
  //     },
  //     {
  //       type: "debit",
  //       description: "Deposit",
  //       amount: 300
  //     },
  //     {
  //       type: "credit",
  //       description: "Olive Graden",
  //       amount: 50
  //     },
  //     {
  //       type: "credit",
  //       description: "Walmart",
  //       amount: 100
  //     },
  //     {
  //       type: "debit",
  //       description: "Deposit",
  //       amount: 1000
  //     },
  //     {
  //       type: "credit",
  //       description: "Panera",
  //       amount: 40
  //     },
  //     {
  //       type: "credit",
  //       description: "7 Eleven",
  //       amount: 25
  //     }
  //   ]
  // }

  
  constructor(
    private _accountService: AccountService
  ){}

  ngOnInit() {
    //this.account;
    this._accountService.getAccount().subscribe((response: Account) => {
      this.account = response;
    });
    this.visibleTransactions = this.account.transactions;
  }

  filterTransaction(event: any){
    const value = event.target.value
    if(value){
      this.visibleTransactions = this.account.transactions.filter((val) => val.type === value);
    } else {
      this.visibleTransactions = this.account.transactions;
    }
  }

  submit(){
    this.account.transactions.push({
      amount : this.tran[0].amount,
      type : "tranfer",
      description : this.tran[0].description
    });
    this.account.totalBalance = this.account.totalBalance - this.tran[0].amount;
  }
}
