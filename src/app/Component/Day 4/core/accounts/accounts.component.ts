import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/i-user';
import { AccountsService } from 'src/app/Services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accountlist : IUser[] =[];

  constructor(private accser: AccountsService){}
  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this.accser.getAll().subscribe({
      next:(data)=>{
        this.accountlist = data;
      }
    })
  }

  delete(id: string){
    this.accser.delete(id).subscribe({
      next: ()=>{ 
        this.getdata();
          
       },
      error: ()=>{
        console.log("errror");
      }
    })
  }

}
