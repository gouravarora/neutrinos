import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(private _router: Router) {

  }
  ngOnInit() {
    this.isLoggedIn = sessionStorage.getItem('user') ? true : false;
    this._router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isLoggedIn = sessionStorage.getItem('user') ? true : false;
        }
      });
  }

  logout = () => {
    sessionStorage.clear();
    this._router.navigate(['']);
  }
}
