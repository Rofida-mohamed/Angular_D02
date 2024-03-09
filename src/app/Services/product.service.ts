
import { IProduct } from '../Models/i-product';
import { ProductList } from './../Models/product-list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Products : IProduct[] | undefined;
  constructor() {
    this.Products = ProductList;
   }

   getAll(): IProduct[] | undefined{
    return this.Products;
   }

   getbyId (_id:number) : IProduct {
    let found = this.Products?.find(s => s.id === _id);
    if (found){
      return found
    }
    else {
      return {
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
   }

   add(product : IProduct):void{
    this.Products?.push({...product})
   }

   edit (i:number, newPrd:IProduct){
    let oldPrd = this.Products?.find(p=> p.id === i);
    if (oldPrd){
      oldPrd.name = newPrd.name;
      oldPrd.img = newPrd.img;
      oldPrd.description = newPrd.description;
      oldPrd.price = newPrd.price;
      oldPrd.onSale = newPrd.onSale;
      oldPrd.discount = newPrd.discount;
      oldPrd.quantity = newPrd.quantity;
    }
   }

   delete (i:number):void {

    let delPrd = this.Products?.find(p=> p.id === i);
    if (delPrd){
        this.Products = this.Products?.filter(p => p.id != i)
    }

   }

   getnewid ():number{
    let maxId = 0;

    // Find the maximum existing ID
    this.Products?.forEach(product => {
      if (product.id > maxId) {
        maxId = product.id;
      }
    });

    // Increment the maximum ID to get a new ID
    return maxId + 1;
   }
}
