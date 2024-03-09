import { ProductService } from './../../../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { IProduct } from 'src/app/Models/i-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: IProduct[] =[];

  constructor(private ProdService:ProductService,){
    
  }
  ngOnInit(): void {
    this.productList = this.ProdService.getAll() as IProduct[];
  }

  delete( _id : number){

    this.ProdService.delete(_id);
    this.productList = this.ProdService.getAll() as IProduct[];

  }
}
