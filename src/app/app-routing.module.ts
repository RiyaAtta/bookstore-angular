import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerloginComponent } from './customer/customerlogin/customerlogin.component';
import{CustomerregistrationComponent} from './customer/customerregistration/customerregistration.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customerlogin',component:CustomerloginComponent},
  {path:'customerregistration',component:CustomerregistrationComponent},
  {path:'cart',component:CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

