import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Component/Day 4/shared/footer/footer.component';
import { NavbarComponent } from './Component/Day 4/shared/navbar/navbar.component';
import { HomeComponent } from './Component/Day 4/core/home/home.component';
import { ProductsComponent } from './Component/Day 4/core/products/products.component';
import { ProductDetailsComponent } from './Component/Day 4/core/product-details/product-details.component';
import { ProductFormComponent } from './Component/Day 4/core/product-form/product-form.component';
import { LoginComponent } from './Component/Day 4/core/login/login.component';
import { NotFoundComponent } from './Component/Day 4/core/not-found/not-found.component';
import { ContactsComponent } from './Component/Day 4/core/contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AccountsComponent } from './Component/Day 4/core/accounts/accounts.component';
import { AddAccountComponent } from './Component/Day 4/core/add-account/add-account.component'
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    LoginComponent,
    NotFoundComponent,
    ContactsComponent,
    AccountsComponent,
    AddAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
