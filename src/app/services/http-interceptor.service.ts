import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next) {
    const token = sessionStorage.getItem('token');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', token ? token : 'null'),
      url: environment.baseUrl + req.url
    });
    return next.handle(authReq);
  }
  constructor(private router: Router) { }

}
