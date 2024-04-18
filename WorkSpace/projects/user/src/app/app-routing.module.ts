import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AllHomeImagesComponent } from './components/homeImages/all-home-images/all-home-images.component';
import { AllCompaniesComponent } from './components/companies/all-companies/all-companies.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'homeImages', component: AllHomeImagesComponent },
  { path: 'companies', component: AllCompaniesComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
