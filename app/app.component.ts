import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'my-app',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})

export class AppComponent { }