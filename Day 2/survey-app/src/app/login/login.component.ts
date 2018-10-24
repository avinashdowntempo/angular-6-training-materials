import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  constructor() { }

  ngOnInit() {
  }
  login(user: HTMLInputElement) {
    if (user.value) {
      this.username = user.value;
    }
  }

}
