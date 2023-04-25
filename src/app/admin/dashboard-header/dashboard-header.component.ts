import { Component } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {
  constructor(private loginService: LoginService) {
  }
  
  logoutClicked(){
    this.loginService.removeLoggedUserFromStorage();
  }
}
