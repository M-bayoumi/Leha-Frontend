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
import { AllProjectPhasesComponent } from './components/projectPhases/all-project-phases/all-project-phases.component';
import { AllPhaseItemsComponent } from './components/phaseItems/all-phase-items/all-phase-items.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { engineerGuard } from './gaurds/engineer.guard';
import { adminGuard } from './gaurds/admin.guard';
import { superAdminGuard } from './gaurds/super-admin.guard';
import { supervisorGuard } from './gaurds/supervisor.guard';
import { CompanyComponent } from './components/company/company.component';
import { CompaniesDetailsComponent } from './components/companies-details/companies-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'apply', component: AddFormComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'company/:id', component: CompaniesDetailsComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'login', component: SignInComponent },
  {
    path: 'addUser',
    component: RegisterComponent,
    canActivate: [superAdminGuard],
  },
  {
    path: 'homeImages',
    component: AllHomeImagesComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'companies',
    component: AllCompaniesComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'addresses',
    component: AllAddressesComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'members',
    component: AllBoardMemberComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'speeches',
    component: AllBoardMemberSpeechesComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'clients',
    component: AllClientsComponent,
    canActivate: [adminGuard],
  },
  { path: 'jobs', component: AllJobsComponent, canActivate: [adminGuard] },
  { path: 'forms', component: AllFormsComponent, canActivate: [adminGuard] },
  { path: 'posts', component: AllPostsComponent, canActivate: [adminGuard] },
  {
    path: 'products',
    component: AllProductsComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'services',
    component: AllServicesComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'projects',
    component: AllProjectsComponent,
    canActivate: [supervisorGuard],
  },
  {
    path: 'projectPhases',
    component: AllProjectPhasesComponent,
    canActivate: [supervisorGuard],
  },
  {
    path: 'phaseItems',
    component: AllPhaseItemsComponent,
    canActivate: [engineerGuard],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
