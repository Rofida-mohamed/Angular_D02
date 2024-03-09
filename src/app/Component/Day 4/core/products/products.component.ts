import { Subscription } from 'rxjs';
import { ProductService } from './../../../../Services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { IProduct } from 'src/app/Models/i-product';
import { FakeApiProductService } from 'src/app/Services/fake-api-product.service';
import { AccountsService } from 'src/app/Services/accounts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {

  productList: IProduct[] =[];

  constructor(private ProdService:FakeApiProductService ,private accountSer: AccountsService){
    
  }
  ngOnDestroy(): void {
    this.mySubscription?.unsubscribe();
  }

  mySubscription : Subscription | undefined ;
  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.mySubscription =  this.ProdService.getAll().subscribe({
      next:(data)=> { this.productList = data}
    })
  }

  isadmin(){
    return this.accountSer.isadmin();
  }
  delete( _id : number){ 

    console.log(_id);
    this.ProdService.delete(_id).subscribe({
      next: ()=>{ 
        this.getdata();
          
       },
      error: ()=>{
        console.log("errror");
      }
    })
    

}
}
