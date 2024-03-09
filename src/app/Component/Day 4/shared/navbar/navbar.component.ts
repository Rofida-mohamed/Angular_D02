import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/Services/accounts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private accountser: AccountsService, private router: Router){}

  islogin(){
    return this.accountser.islogin()
  }

  isadmin(){
    return this.accountser.isadmin()
  }

  logout(){
    this.accountser.logout();
    this.router.navigate(['\login'])
  }

}
