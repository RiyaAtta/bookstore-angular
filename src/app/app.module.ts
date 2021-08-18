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

@NgModule({
  declarations: [
    AppComponent,
    HomenavbarComponent,
    FooterComponent,
    HomeComponent,
    CustomerloginComponent,
    CustomerloginnavbarComponent,
    CustomerregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
