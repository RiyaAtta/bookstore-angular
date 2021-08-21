import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomenavbarComponent } from './navbar/homenavbar/homenavbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CustomerloginComponent } from './customer/customerlogin/customerlogin.component';
import { CustomerloginnavbarComponent } from './navbar/customerloginnavbar/customerloginnavbar.component';
import { CustomerregistrationComponent } from './customer/customerregistration/customerregistration.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerloginService } from 'src/app/service/customerlogin.service';
import { CustomerregistrationService } from 'src/app/service/customerregistration.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomenavbarComponent,
    FooterComponent,
    HomeComponent,
    CustomerloginComponent,
    CustomerloginnavbarComponent,
    CustomerregistrationComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'customerlogin',component:CustomerloginComponent},
      {path:'customerregistration',component:CustomerregistrationComponent}
    ])
  ],
  providers: [CustomerregistrationService,CustomerloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
