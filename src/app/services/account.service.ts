import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs"
//import { map } from 'rxjs/operators';

import { Account } from "../models/account.model";
import { ACCOUNT } from "../data";

@Injectable({
    providedIn: 'root'
})
export class AccountService{

    constructor(private http: HttpClient) { }

    // getAccount(): Observable<Account> {
    //     return this.http.get("/src/app/data.json").pipe( 
    //     map((res: any) => res.json().response));
    // }

    getAccount(): Observable<Account> {
        const account = of(ACCOUNT);
        return account;
    }
}