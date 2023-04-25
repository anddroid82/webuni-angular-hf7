import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = APP_TITLE;

  constructor(private router: Router, private route: ActivatedRoute) {

  }
}
export const APP_TITLE = "Task manager";