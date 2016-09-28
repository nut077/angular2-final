import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register.component';
import { RegisterService } from './service/register.service';
import { LoginComponent } from './home/login.component';
import { LoginService } from './service/login.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

export const appRoutingProviders: any[] = [
  RegisterService, LoginService
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);