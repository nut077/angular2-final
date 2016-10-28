import { Component, OnInit } from '@angular/core';
import {Photo} from "../models/photo.model";
import {PhotoService} from "../service/photo.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'photo-list',
  templateUrl: 'photo-list.component.html'
})
export class PhotoListComponent implements OnInit {
  photos: Photo[];
  selectedPhoto: Photo;

  constructor(private photoService: PhotoService, private router: Router) {
    this.photoService.getPhotos().subscribe(
      data => this.photos = JSON.parse(data['_body']),
      error => console.log(error)
    );
  }

  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['photo-detail', this.selectedPhoto.photoId]);
  }

  ngOnInit() { }

}