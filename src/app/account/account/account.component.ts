import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  login: FormGroup;
  register: FormGroup;
  constructor(private _formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.login = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.register = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  doLogin = () => {
    this.apiService.login(this.login.value)
      .subscribe((succes: any) => {
        sessionStorage.setItem('user', JSON.stringify(succes.user));
        sessionStorage.setItem('token', succes.token);
        this.router.navigate(['complaints']);
      }, (err) => {

      });
  }

  doRegister = () => {
    this.apiService.register(this.register.value)
      .subscribe((succes) => {

      }, (err) => {

      });
  }
}
