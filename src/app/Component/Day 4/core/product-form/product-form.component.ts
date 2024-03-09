import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/i-product';
import { FakeApiProductService } from 'src/app/Services/fake-api-product.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {


  
  product: IProduct = {
    id: 0,
    name: "",
    img: "",
    description: "",
    onSale: false,
    discount: 0,
    price: 0,
    quantity: 1
  };
  i:number=-1;
  newid:number = 0;
  isEdit:boolean =false;
  myForm: FormGroup = new FormGroup({});

  constructor(private ProdService:FakeApiProductService, private activeRoute:ActivatedRoute, private myrouter:Router){
    
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.i = +params['id']; // Convert the parameter to a number
      this.loadProduct();
    });
    this.ProdService.getNewId().subscribe({
      next: (d)=>{
        this.newid = d, 
        this.load()}
    })
    
  }

  loadProduct(){
    this.ProdService.getById(this.i).subscribe({
      next: (data)=>{
        this.product = data,
        this.isEdit = true
      }
    });

    
    this.load();
  }  

  load(){
    console.log("heelo",this.newid);
    this.myForm = new FormGroup({
      id: new FormControl(
        this.isEdit ? `${this.product.id}` : `${this.newid}`,
        [
          
          
        ]
      ),
      name: new FormControl(
        this.isEdit ? this.product.name : "",
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ),
      quantity: new FormControl(
        this.isEdit ? this.product.quantity : "",
        [
          Validators.required,
          this.isEdit? Validators.min(0) :Validators.min(5)
        ]
      ),
      description: new FormControl(
        this.isEdit ? this.product.description : "",
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ),
      img: new FormControl(
        this.isEdit ? this.product.img : "",
        [
          Validators.required
        ]
      ),
      discount: new FormControl(
        this.isEdit ? this.product.discount : "",
        [
          Validators.min(5),
          Validators.max(25)
        ]
      ),
      price: new FormControl(
        this.isEdit ? this.product.price : "",
        [
          Validators.required,
          Validators.min(100)
        ]
      ),
      onSale: new FormControl(
        this.isEdit ? this.product.onSale : false,
        [
          
        ]
      ),
    });
  }
 

  get namecontrol(){
    return this.myForm.get('name')
  }
  get quantitycontrol(){
    return this.myForm.get('quantity')
  }
  get categorycontrol(){
    return this.myForm.get('description')
  }
  get imgcontrol(){
    return this.myForm.get('img')
  }
  get discountcontrol(){
    return this.myForm.get('discount')
  }
  get pricecontrol(){
    return this.myForm.get('price')
  }
  get isinsalecontrol(){
    return this.myForm.get('onSale')
  }
  getData(e: Event){
    e.preventDefault();
   
    if (this.isEdit){

      this.ProdService.edit(this.i,this.myForm.value).subscribe()
    }else{
      
      this.ProdService.add(this.myForm.value).subscribe()
      // console.log(this.myForm.value);
      // console.log(this.newid)
    }

    this.myrouter.navigate(['/products']);
  }
}
