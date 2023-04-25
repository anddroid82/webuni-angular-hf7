import { Component, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';

  constructor(private loginService:LoginService,private router:Router) {

  }
  
  loginClicked() {
    const result = this.loginService.checkUsernameForLogin(this.username);
    if (result) {
      this.loginService.writeLoggedUserToStorage(this.username);
      this.router.navigateByUrl('/dashboard');
    }
    this.username = '';
  }

  registrationClicked() {
    const result = this.loginService.registrationUsername(this.username);
    if (result) {
      this.loginService.writeLoggedUserToStorage(this.username);
      this.router.navigateByUrl('dashboard');
    }
    this.username = '';
  }

}
