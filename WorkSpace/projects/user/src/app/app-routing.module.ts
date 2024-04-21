import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AllHomeImagesComponent } from './components/homeImages/all-home-images/all-home-images.component';
import { AllCompaniesComponent } from './components/companies/all-companies/all-companies.component';
import { AllBoardMemberComponent } from './components/boardMembers/all-board-member/all-board-member.component';
import { AllBoardMemberSpeechesComponent } from './components/boardMemberSpeeches/all-board-member-speeches/all-board-member-speeches.component';
import { AllClientsComponent } from './components/clients/all-clients/all-clients.component';
import { AllAddressesComponent } from './components/companyAddresses/all-addresses/all-addresses.component';
import { AllJobsComponent } from './components/jobs/all-jobs/all-jobs.component';
import { AddFormComponent } from './components/forms/add-form/add-form.component';
import { AllFormsComponent } from './components/forms/all-forms/all-forms.component';
import { AllPostsComponent } from './components/posts/all-posts/all-posts.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { AllServicesComponent } from './components/Services/all-services/all-services.component';
import { AllProjectsComponent } from './components/projects/all-projects/all-projects.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'homeImages', component: AllHomeImagesComponent },
  { path: 'companies', component: AllCompaniesComponent },
  { path: 'addresses', component: AllAddressesComponent },
  { path: 'members', component: AllBoardMemberComponent },
  { path: 'speeches', component: AllBoardMemberSpeechesComponent },
  { path: 'clients', component: AllClientsComponent },
  { path: 'jobs', component: AllJobsComponent },
  { path: 'forms', component: AllFormsComponent },
  { path: 'apply', component: AddFormComponent },
  { path: 'posts', component: AllPostsComponent },
  { path: 'products', component: AllProductsComponent },
  { path: 'services', component: AllServicesComponent },
  { path: 'projects', component: AllProjectsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
