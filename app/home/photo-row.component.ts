import { Component } from '@angular/core';
import {Photo} from '../models/photo.model';
import {PhotoService} from '../service/photo.service';

@Component({
  moduleId: module.id,
  selector: 'photo-row',
  templateUrl: 'photo-row.component.html'
})
export class PhotoRowComponent {
  photoList: Photo[];
  photoListSorted: Photo[];
  photoListRanked: Photo[];

  constructor(private photoService: PhotoService) {
    this.photoService.getPhotos().subscribe(
      data => {
        this.photoList = JSON.parse(data['_body']);
        this.photoListSorted = this.photoList.sort((a, b) => b.likes - a.likes)

        this.photoListRanked = [];

        for (let index in this.photoListSorted) {
          if (Number(index) < 3) {
            this.photoListRanked.push(this.photoListSorted[index]);
          } else {
            break;
          }
        }
      }, error => console.log(error)
    );
  }

}