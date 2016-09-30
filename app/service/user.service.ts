import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  getUserByUsername(username: string) {
    let url = 'http://localhost:8080/rest/user/username';
    let header = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});

    return this.http.post(url, username, {headers: header});
  }

}