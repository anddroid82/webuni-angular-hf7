import { Component } from '@angular/core';
import { APP_TITLE } from '../../app.component';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  appTitle = APP_TITLE;
  constructor(private loginService: LoginService) {
  }
  
  logoutClicked(){
    this.loginService.removeLoggedUserFromStorage();
  }

}
