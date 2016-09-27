import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhotoListComponent } from './home/photo-list.component';
import { SidePanelComponent } from './home/side-panel.component';
import { HeaderComponent } from './shared/header/header.component';
import { routing, appRoutingProviders } from "./app.routing";
import { RegisterComponent } from './home/register.component';
import {HttpModule} from "@angular/http";

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
    RegisterComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}