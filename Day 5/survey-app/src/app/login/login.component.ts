import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ang-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() logged: EventEmitter<boolean> = new EventEmitter;
  username;
  constructor() { }

  ngOnInit() {
  }
  login(user: HTMLInputElement) {
    if (user.value) {
      this.username = user.value;
      this.logged.emit(true);
    } else {
      this.logged.emit(false);
    }
  }

}
