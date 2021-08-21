import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerloginService } from 'src/app/service/customerlogin.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  constructor(private customerloginService: CustomerloginService, private router: Router) {}
  customer:Customer = new Customer(0,"","","","","","");
  loginmessage:any;


    ngOnInit(): void {}
    customerloginForm=new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    });

    onSubmit() {
      console.log(this.customerloginForm.value);
    }

    // public loginNow() {
    //   let response= this.customerloginService.doLogin(this.customer.getemail(),this.customer.getpassword());
    //   response.subscribe((data)=> this.loginmessage=data);
    // }
  }
