import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/Services/accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private accountser: AccountsService, private router: Router){}

  loginform :FormGroup = new FormGroup ({
    email : new FormControl(),
    password : new FormControl()
  })

  onsubmit(e : Event){
    e.preventDefault();

    if(this.loginform.valid){
      this.accountser.login(this.loginform.value.email, this.loginform.value.password);
      this.router.navigate(['/home']);
    }
  }
}
