import { Component, OnInit } from '@angular/core';
import { UploadPhotoService } from '../service/upload-photo.service';
import { AddPhotoService } from '../service/add-photo.service';
import { UserService } from '../service/user.service';
import { Photo } from '../models/photo.model';
import { User } from '../models/user.model';

@Component({
  moduleId: module.id,
  selector: 'add-photo',
  templateUrl: 'add-photo.component.html'
})
export class AddPhotoComponent implements OnInit {

  newPhoto: Photo = new Photo();
  photoAdded: boolean = false;
  user: User;

  constructor(
    private uploadPhotoService: UploadPhotoService,
    private addPhotoService: AddPhotoService,
    private userService: UserService) {}

  onSubmit() {
    this.userService.getUserByUsername(localStorage.getItem('currentUsername')).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))['_body']);
        this.newPhoto.user = this.user;
        this.addPhotoService.sendPhoto(this.newPhoto).subscribe(
          data => {
            this.photoAdded = true;
            this.newPhoto = new Photo();
          }, error => console.log(error)
        );
      }, error => console.log(error)
    );
  }

  ngOnInit() {
  }

}