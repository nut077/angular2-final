import { Injectable } from '@angular/core';

@Injectable()
export class UploadPhotoService {

  filesToUpload: Array<File>;
  constructor() {
    this.filesToUpload = [];
  }

  upload() {
    this.makeFileRequest('http://localhost:8080/rest/photo/upload', [], this.filesToUpload).then(
      (result) => {
        console.log(result);
      }, error => {
        console.log(error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((reslove, reject) => {
      var formDate: any = new FormData();
      var xhr = new XMLHttpRequest();

      for (var i = 0; i < files.length; i++) {
        formDate.append('uploads[]', files[i], files[i].name);
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          alert('Upload Successful');
        } else {
          reject(xhr.response);
        }
      }

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
      xhr.send(formDate);
    });
  }

}