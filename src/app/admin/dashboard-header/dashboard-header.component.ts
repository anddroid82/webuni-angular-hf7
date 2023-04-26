import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {
  constructor(private loginService: LoginService, private router:Router) {
  }
  
  logoutClicked(){
    this.loginService.removeLoggedUserFromStorage();
    this.router.navigateByUrl('login');
  }
}
