import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) {
  }

  fillTemplate = (templateString, templateVars) => {
    return new Function('return `' + templateString + '`;').call(templateVars);
  }

  login = (body) => {
    return this._http.post(environment.loginUrl, body);
  }

  register = (body) => {
    return this._http.post(environment.registerUrl, body);
  }

  getComplaints = () => {
    return this._http.get(environment.complaints);
  }

  getComplaint = (id) => {
    return this._http.get(this.fillTemplate(environment.getComplaint, {id}));
  }

  createComplaint = (body) => {
    return this._http.post(environment.complaints, body);
  }

  addComment = (id, body) => {
    return this._http.post(this.fillTemplate(environment.addcomment, {id}), body);
  }
}
