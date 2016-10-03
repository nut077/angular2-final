import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotoListComponent } from './home/photo-list.component';
import { SidePanelComponent } from './home/side-panel.component';
import { HeaderComponent } from './shared/header/header.component';
import { RegisterComponent } from './home/register.component';
import { LoginComponent } from './home/login.component';
import { MyAlbumComponent } from './home/my-album.component';
import { AddPhotoComponent } from './home/add-photo.component';
import { PhotoDetailComponent } from './home/photo-detail.component';
import { PhotoCommentComponent } from './home/photo-comment.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    MyAlbumComponent,
    AddPhotoComponent,
    PhotoDetailComponent,
    PhotoCommentComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}