import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('username', this.username);
    console.log('password', this.password);
    if (this.username && this.password && this.username.toLowerCase() === 'username' && this.password.toLowerCase() === 'password') {
      this.message = 'You have entered the correct username and password';
    } else {
      this.message = 'You have entered a wrong username and password';
    }
  }

}
