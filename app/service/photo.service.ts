import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../models/user.model';
import {Photo} from "../models/photo.model";

@Injectable()
export class PhotoService {

  constructor(private http: Http) {
  }

  getPhotosByUser(user: User) {
    let url = 'http://localhost:8080/rest/photo/user';
    let header = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});

    return this.http.post(url, user, {headers: header});
  }

  getPhotoById(photoIid: number) {
    let url = 'http://localhost:8080/rest/photo/photo-id';
    let header = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});

    return this.http.post(url, photoIid, {headers: header});
  }

  updatePhoto(photo: Photo) {
    let url = 'http://localhost:8080/rest/photo/update';
    let header = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});

    return this.http.post(url, photo, {headers: header});
  }

}