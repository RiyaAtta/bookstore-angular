import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(null, Validators.required),
  });
  onSubmit() {
    console.log(this.userForm.value);
  }

}

