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
import { AuthGuard } from './gaurds/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'apply', component: AddFormComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'login', component: SignInComponent },
  { path: 'addUser', component: RegisterComponent, canActivate: [AuthGuard]  },
  { path: 'homeImages', component: AllHomeImagesComponent, canActivate: [AuthGuard] },
  { path: 'companies', component: AllCompaniesComponent, canActivate: [AuthGuard] },
  { path: 'addresses', component: AllAddressesComponent , canActivate: [AuthGuard] },
  { path: 'members', component: AllBoardMemberComponent, canActivate: [AuthGuard]  },
  { path: 'speeches', component: AllBoardMemberSpeechesComponent , canActivate: [AuthGuard] },
  { path: 'clients', component: AllClientsComponent , canActivate: [AuthGuard] },
  { path: 'jobs', component: AllJobsComponent , canActivate: [AuthGuard] },
  { path: 'forms', component: AllFormsComponent , canActivate: [AuthGuard] },
  { path: 'posts', component: AllPostsComponent , canActivate: [AuthGuard] },
  { path: 'products', component: AllProductsComponent , canActivate: [AuthGuard] },
  { path: 'services', component: AllServicesComponent , canActivate: [AuthGuard] },
  { path: 'projects', component: AllProjectsComponent, canActivate: [AuthGuard]  },
  { path: 'projectPhases', component: AllProjectPhasesComponent , canActivate: [AuthGuard] },
  { path: 'phaseItems', component: AllPhaseItemsComponent , canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
