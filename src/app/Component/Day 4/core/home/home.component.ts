import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { AccountsService } from 'src/app/Services/accounts.service';
import { FakeApiProductService } from 'src/app/Services/fake-api-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor (private accountser: AccountsService){}

  islogin(){
    return this.accountser.islogin()
  }

 


}
