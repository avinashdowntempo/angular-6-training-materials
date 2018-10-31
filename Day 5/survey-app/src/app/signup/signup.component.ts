import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  subscription = ['trial', '3 months', '6 months', 'yearly'];
  signup = {
    username: 'avinash jey',
    email: 'test@gmail.com',
    newpassword: '',
    confirmpassword: '',
    subscription: ''
  };
  constructor() { }
  onSubmit() {
    alert('are you sure you want to submit the form');
  }
  ngOnInit() {
  }

}
