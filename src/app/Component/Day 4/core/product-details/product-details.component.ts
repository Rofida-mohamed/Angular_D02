import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/i-product';
import { FakeApiProductService } from 'src/app/Services/fake-api-product.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  product:IProduct  = {
    id:0,
    name:"",
    img:"",
    description:"",
    onSale:false,
    discount:10,
    price:100,
    quantity:1
  }

  i:number =1;
  mySubscription : Subscription | undefined;
  constructor(private ProdService:FakeApiProductService, private activeRoute:ActivatedRoute){
    
  }
  ngOnDestroy(): void {
    this.mySubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.i = +params['id']; // Convert the parameter to a number
      this.loadProduct();
    })
  }

  private loadProduct(): void {
    this.mySubscription = this.ProdService.getById(this.i).subscribe({
      next: (data) =>{this.product = data },
      error: ()=>{
        console.log(`the product with id = ${this.i} not found`);

        this.product =  {
          id:-1,
          name:"Not Found",
          img:"https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg",
          description:"",
          onSale:false,
          discount:10,
          price:0,
          quantity:0
          
        }
      }
    });

    
  }
}
