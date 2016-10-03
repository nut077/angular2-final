import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../models/photo.model';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
import { PhotoService } from '../service/photo.service';
import { CommentService } from '../service/comment.service';
import { Comment } from '../models/comment.model';

@Component({
  moduleId: module.id,
  selector: 'photo-comment',
  templateUrl: 'photo-comment.component.html'
})
export class PhotoCommentComponent implements OnInit {

  @Input('photo') photo: Photo;
  myLocalStorage = localStorage;
  user: User = new User();
  newComment = new Comment();

  constructor(private userService: UserService, private commentService: CommentService, private photoService: PhotoService) {
    this.userService.getUserByUsername(localStorage.getItem('currentUsername')).subscribe(
      user => {
        this.user = JSON.parse(user['_body']);
      }, error => console.log(error)
    );
  }

  onSubmit() {
    this.newComment.photo = this.photo;
    this.newComment.username = this.user.username;
    this.newComment.photoId = this.photo.photoId;

    this.commentService.addComment(this.newComment).subscribe(
      photo => this.photoService.getPhotoById(this.photo.photoId).subscribe(
       photo => this.photo = JSON.parse(photo['_body']),
        error => console.log(error)
      )
    );
    this.newComment = new Comment();
  }

  ngOnInit() {
  }

}