"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var register_component_1 = require('./home/register.component');
var register_service_1 = require('./service/register.service');
var login_component_1 = require('./home/login.component');
var login_service_1 = require('./service/login.service');
var photo_service_1 = require('./service/photo.service');
var user_service_1 = require('./service/user.service');
var my_album_component_1 = require('./home/my-album.component');
var add_photo_component_1 = require('./home/add-photo.component');
var upload_photo_service_1 = require('./service/upload-photo.service');
var add_photo_service_1 = require('./service/add-photo.service');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'my-album', component: my_album_component_1.MyAlbumComponent },
    { path: 'add-photo', component: add_photo_component_1.AddPhotoComponent },
];
exports.appRoutingProviders = [
    register_service_1.RegisterService, login_service_1.LoginService, photo_service_1.PhotoService, user_service_1.UserService, upload_photo_service_1.UploadPhotoService, add_photo_service_1.AddPhotoService
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map