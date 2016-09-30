import { Injectable } from '@angular/core';
import {
  Http,
  Headers
} from '@angular/http';


@Injectable()
export class LoginService {
  token: string;

  constructor(private http: Http) {}

  sendCredentials(model) {
    let tokenUrl = 'http://localhost:8080/user/login';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(tokenUrl, model, { headers: headers });
  }

  sendToken(token) {
    let userUrl = 'http://localhost:8080/rest/user/users';
    let headers = new Headers({ 'Authorization': 'Bearer ' + token });

    return this.http.get(userUrl, { headers: headers })
  }

  checkLogin() {
    if (localStorage.getItem('currentUsername') !== '' && localStorage.getItem('token') !== '') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('currentUsername', '');
    alert('You just logged out.');
  }
}