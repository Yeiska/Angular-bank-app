import { Inject, Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';
import { Account } from "../models/account.model";

@Injectable({
    providedIn: 'root'
})
export class AccountService{

    constructor(private http: HttpClient) { }

    getAccount(): Observable<Account> {
        return this.http.get("/src/app/data.json").pipe( 
        map((res: any) => res.json().response));
    }
}