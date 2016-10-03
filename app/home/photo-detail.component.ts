import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../models/photo.model';
import { User } from '../models/user.model';
import { PhotoService } from '../service/photo.service';
import { UserService } from '../service/user.service';

@Component({
  moduleId: module.id,
  selector: 'photo-detail',
  templateUrl: 'photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit {

  photo: Photo = new Photo();
  like: string;
  user: User;

  constructor(private photoService: PhotoService, private userService: UserService, private activatedRoute: ActivatedRoute) {
    let photoId = 0;
    this.activatedRoute.params.map(params => params['id']).subscribe(
      id => photoId = id
    );

    this.photoService.getPhotoById(photoId).subscribe(
      photo => {
        this.photo = JSON.parse(photo['_body']);
        this.userService.getUserByUsername(localStorage.getItem('currentUsername')).subscribe(
          user => {
            this.user = JSON.parse(user['_body']);
            if (this.user.likedPhotoList.filter(pt => pt.photoId === this.photo.photoId)[0]) {
              this.like = 'Unlike';
            } else {
              this.like = 'Like';
            }
          }, error => console.log(error)
        );
      }, error => console.log(error)
    );
  }

  goBack() {
    window.history.back();
  }

  likeDisplay() {
    if (this.like === 'Like') {
      this.like = 'Unlike';
      this.user.likedPhotoList.push(this.photo);
      this.photo.likes += 1;
      this.userService.updateUser(this.user).subscribe();
      this.photoService.updatePhoto(this.photo).subscribe();
    } else {
      this.like = 'Like';

      for (let i = 0; i < this.user.likedPhotoList.length; i++) {
        if (this.user.likedPhotoList[i].photoId === this.photo.photoId) {
          this.user.likedPhotoList.splice(i, 1);
        }
      }

      this.photo.likes -= 1;
      this.userService.updateUser(this.user).subscribe();
      this.photoService.updatePhoto(this.photo).subscribe();
    }
  }

  ngOnInit() {
  }

}