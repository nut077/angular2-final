"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var photo_service_1 = require("../service/photo.service");
var router_1 = require("@angular/router");
var PhotoListComponent = (function () {
    function PhotoListComponent(photoService, router) {
        var _this = this;
        this.photoService = photoService;
        this.router = router;
        this.photoService.getPhotos().subscribe(function (data) { return _this.photos = JSON.parse(data['_body']); }, function (error) { return console.log(error); });
    }
    PhotoListComponent.prototype.onSelect = function (photo) {
        this.selectedPhoto = photo;
        this.router.navigate(['photo-detail', this.selectedPhoto.photoId]);
    };
    PhotoListComponent.prototype.ngOnInit = function () { };
    PhotoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'photo-list',
            templateUrl: 'photo-list.component.html'
        }), 
        __metadata('design:paramtypes', [photo_service_1.PhotoService, router_1.Router])
    ], PhotoListComponent);
    return PhotoListComponent;
}());
exports.PhotoListComponent = PhotoListComponent;
//# sourceMappingURL=photo-list.component.js.map