import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Photo } from '../models/photo.model';
import { UserService } from '../service/user.service';
import { PhotoService } from '../service/photo.service';


@Component({
  moduleId: module.id,
  selector: 'my-album',
  templateUrl: 'my-album.component.html'
})
export class MyAlbumComponent implements OnInit {

  private photos: Photo[];
  private user;
  private selectedPhoto: Photo;

  constructor(private photoService: PhotoService, private userService: UserService, private router: Router) {
    this.userService.getUserByUsername(localStorage.getItem('currentUsername')).subscribe(
      user => {
        this.user = user['_body'];
        this.photoService.getPhotosByUser(this.user).subscribe(
          photos => {
            this.photos = JSON.parse(user['_body']).photoList
          }
        ), error => console.log(error);
      }
    ), error => console.log(error);
  }

  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['ImageDetail', {id: this.selectedPhoto.photoId}]);
  }

  ngOnInit() {
  }

}