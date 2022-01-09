import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginView = true;
  email = '';
  password = '';
  loginSuccess = false;
  loginMessage = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  toggleView(): void {
    this.loginView = !this.loginView;
  }

  handleLogin(): void {
    const verifiedUser = this.userService.verifyUser(this.email, this.password);

    if (verifiedUser) {
      this.loginMessage = '';
      this.loginSuccess = true;

      this.userService.user.id = verifiedUser.id;
      this.userService.user.name = verifiedUser.name;
      this.userService.user.email = verifiedUser.email;
    } else {
      this.loginMessage = 'Invalid Attempt to Login. Please try again';
    }
  }

}
