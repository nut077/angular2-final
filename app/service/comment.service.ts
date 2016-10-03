import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import { Comment } from '../models/comment.model';

@Injectable()
export class CommentService {

  constructor(private http: Http) {}
  
  addComment(comment: Comment) {
    let url = 'http://localhost:8080/rest/comment/add';
    let header = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});

    return this.http.post(url, comment, {headers: header});
  }

}