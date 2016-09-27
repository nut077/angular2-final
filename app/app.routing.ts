import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register.component';
import { RegisterService } from './service/register.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent }
];

export const appRoutingProviders: any[] = [
  RegisterService
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);