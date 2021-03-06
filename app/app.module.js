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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require("@angular/http");
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var photo_list_component_1 = require('./home/photo-list.component');
var side_panel_component_1 = require('./home/side-panel.component');
var header_component_1 = require('./shared/header/header.component');
var register_component_1 = require('./home/register.component');
var login_component_1 = require('./home/login.component');
var my_album_component_1 = require('./home/my-album.component');
var add_photo_component_1 = require('./home/add-photo.component');
var photo_detail_component_1 = require('./home/photo-detail.component');
var photo_comment_component_1 = require('./home/photo-comment.component');
var photo_row_component_1 = require('./home/photo-row.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                photo_list_component_1.PhotoListComponent,
                side_panel_component_1.SidePanelComponent,
                header_component_1.HeaderComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
                my_album_component_1.MyAlbumComponent,
                add_photo_component_1.AddPhotoComponent,
                photo_detail_component_1.PhotoDetailComponent,
                photo_comment_component_1.PhotoCommentComponent,
                photo_row_component_1.PhotoRowComponent
            ],
            providers: [
                app_routing_1.appRoutingProviders
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map