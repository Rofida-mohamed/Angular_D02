import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/i-product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

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
  constructor(private ProdService:ProductService, private activeRoute:ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.i = +params['id']; // Convert the parameter to a number
      this.loadProduct();
    })
  }

  private loadProduct(): void {
    this.product = this.ProdService.getbyId(this.i);

    // Check if the product is not found or handle other scenarios
    if (!this.product) {
      // Handle the case where the product is not found, redirect, show a message, etc.
      console.error(`Product with id ${this.i} not found.`);
    }
  }
}
