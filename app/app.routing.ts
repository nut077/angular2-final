import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register.component';
import { RegisterService } from './service/register.service';
import { LoginComponent } from './home/login.component';
import { LoginService } from './service/login.service';
import { PhotoService } from './service/photo.service';
import { UserService } from './service/user.service';
import { MyAlbumComponent } from './home/my-album.component';
import { AddPhotoComponent } from './home/add-photo.component';
import { UploadPhotoService } from './service/upload-photo.service';
import { AddPhotoService } from './service/add-photo.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-album', component: MyAlbumComponent },
  { path: 'add-photo', component: AddPhotoComponent },
];

export const appRoutingProviders: any[] = [
  RegisterService, LoginService, PhotoService, UserService, UploadPhotoService, AddPhotoService
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);