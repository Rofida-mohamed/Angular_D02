import { NotFoundComponent } from './Component/Day 4/core/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/Day 4/core/home/home.component';
import { ProductsComponent } from './Component/Day 4/core/products/products.component';
import { ProductFormComponent } from './Component/Day 4/core/product-form/product-form.component';
import { LoginComponent } from './Component/Day 4/core/login/login.component';
import { ContactsComponent } from './Component/Day 4/core/contacts/contacts.component';
import { ProductDetailsComponent } from './Component/Day 4/core/product-details/product-details.component';
import { authenticationGuard } from './Services/authentication.guard';
import { adminGuard } from './Services/admin.guard';
import { AccountsComponent } from './Component/Day 4/core/accounts/accounts.component';
import { AddAccountComponent } from './Component/Day 4/core/add-account/add-account.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent, canActivate: [authenticationGuard] },
  {path:"products/details/:id",component:ProductDetailsComponent, canActivate: [authenticationGuard]},
  {path:"products/add",component:ProductFormComponent, canActivate: [authenticationGuard, adminGuard]},
  {path:"products/edit/:id",component:ProductFormComponent, canActivate: [authenticationGuard, adminGuard]},
  {path:"login",component:LoginComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"accounts", component:AccountsComponent, canActivate:[authenticationGuard, adminGuard]},
  {path:"accounts/add", component:AddAccountComponent, canActivate:[authenticationGuard, adminGuard]},
  {path:"accounts/edit/:id", component:AddAccountComponent, canActivate:[authenticationGuard, adminGuard]},
  {path:"**",component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
