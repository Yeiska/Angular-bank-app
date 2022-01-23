import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Observable, of } from 'rxjs'

import { AppComponent } from './app.component';
import { AccountService } from './services/account.service';
import { TRANSACTIONS } from './data';
import { Account } from './models/account.model';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ HttpClientTestingModule ],
      providers: [ 
        { provide: AccountService, useClass: FakeAccountService }
       ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bank-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bank-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('bank-app is running!');
  });
});

class FakeAccountService {

  ACCOUNT: Account = {
    ownerName: "Jon",
    ownerLastName: "Snow",
    totalBalance: 2000,
    transactions: TRANSACTIONS
  }
  getAccount(): Observable<Account> {
      const account = of(this.ACCOUNT);
      return account;
  }
}
