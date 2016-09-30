import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import {Photo} from '../models/photo.model';

@Injectable()
export class AddPhotoService {

  constructor(private http: Http) {}

  sendPhoto(photo: Photo) {
    let url = 'http://localhost:8080/rest/photo/add';
    let header = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});

    return this.http.post(url, photo, { headers: header });
  }

}