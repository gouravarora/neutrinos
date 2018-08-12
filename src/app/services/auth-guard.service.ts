import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    const user = sessionStorage.getItem('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
