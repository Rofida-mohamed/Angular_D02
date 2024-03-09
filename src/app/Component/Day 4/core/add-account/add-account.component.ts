import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/Models/i-user';
import { AccountsService } from 'src/app/Services/accounts.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {


  user: IUser = {
    id: "0",
    name: "",
    email: '',
    password: '',
    role: ''
  };
  i:number=-1;
  newid:number = 0;
  isEdit:boolean =false;
  myForm: FormGroup = new FormGroup({});

  constructor(private accSer:AccountsService, private activeRoute:ActivatedRoute, private myrouter:Router){
    
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.i = +params['id']; // Convert the parameter to a number
      this.loadProduct();
    });
    this.accSer.getNewId().subscribe({
      next: (d)=>{
        this.newid = d, 
        this.load()}
    })
    
  }

  loadProduct(){
    this.accSer.getById(this.i).subscribe({
      next: (data)=>{
        this.user = data,
        this.isEdit = true
      }
    });

    
    this.load();
  }  

  load(){
    console.log("heelo",this.newid);
    this.myForm = new FormGroup({
      id: new FormControl(
        this.isEdit ? `${this.user.id}` : `${this.newid}`,
        [
          
          
        ]
      ),
      name: new FormControl(
        this.isEdit ? this.user.name : "",
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ),
      email: new FormControl(
        this.isEdit ? this.user.email : "",
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
        ]
      ),
      password: new FormControl(
        this.isEdit ? this.user.password : "",
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
      role: new FormControl(
        this.isEdit ? this.user.role: "",
        [
          Validators.required,
          Validators.pattern(/^(admin|emp)$/i)
        ]
      ),

    });
  }
 

  get namecontrol(){
    return this.myForm.get('name')
  }
  get emailcontrol(){
    return this.myForm.get('email')
  }
  get passwordcontrol(){
    return this.myForm.get('password')
  }
  get rolecontrol(){
    return this.myForm.get('role')
  }
  getData(e: Event){
    e.preventDefault();
   
    if (this.isEdit){

      this.accSer.edit(this.i,this.myForm.value).subscribe()
    }else{
      
      this.accSer.add(this.myForm.value).subscribe()
      // console.log(this.myForm.value);
      // console.log(this.newid)
    }

    this.myrouter.navigate(['/accounts'])
  }
}
