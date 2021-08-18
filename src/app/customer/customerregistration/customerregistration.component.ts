import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.css']
})
export class CustomerregistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userFormReg = new FormGroup({
        custId: new FormControl(),
        custEmail: new FormControl(
          '',
          Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')
        ),
        password: new FormControl(
          '',
          Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')
        ),
      });
    
      onSubmit() {
        console.log(this.userFormReg.value);
      }

}
