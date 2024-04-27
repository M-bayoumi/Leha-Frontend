import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { MatMenuModule } from '@angular/material/menu';

import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  MatRippleModule,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AddHomeImageComponent } from './components/homeImages/add-home-image/add-home-image.component';
import { AllHomeImagesComponent } from './components/homeImages/all-home-images/all-home-images.component';
import { DeleteHomeImageComponent } from './components/homeImages/delete-home-image/delete-home-image.component';
import { UpdateHomeImageComponent } from './components/homeImages/update-home-image/update-home-image.component';
import { HomeImageDetailsComponent } from './components/homeImages/home-image-details/home-image-details.component';
import { AllCompaniesComponent } from './components/companies/all-companies/all-companies.component';
import { AddCompanyComponent } from './components/companies/add-company/add-company.component';
import { UpdateCompanyComponent } from './components/companies/update-company/update-company.component';
import { DeleteCompanyComponent } from './components/companies/delete-company/delete-company.component';
import { CompanyDetailsComponent } from './components/companies/company-details/company-details.component';
import { AllBoardMemberComponent } from './components/boardMembers/all-board-member/all-board-member.component';
import { AddBoardMemberComponent } from './components/boardMembers/add-board-member/add-board-member.component';
import { DeleteBoardMemberComponent } from './components/boardMembers/delete-board-member/delete-board-member.component';
import { UpdateBoardMemberComponent } from './components/boardMembers/update-board-member/update-board-member.component';
import { BoardMemberDetailsComponent } from './components/boardMembers/board-member-details/board-member-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllBoardMemberSpeechesComponent } from './components/boardMemberSpeeches/all-board-member-speeches/all-board-member-speeches.component';
import { AddBoardMemberSpeechComponent } from './components/boardMemberSpeeches/add-board-member-speech/add-board-member-speech.component';
import { UpdateBoardMemberSpeechComponent } from './components/boardMemberSpeeches/update-board-member-speech/update-board-member-speech.component';
import { DeleteBoardMemberSpeechComponent } from './components/boardMemberSpeeches/delete-board-member-speech/delete-board-member-speech.component';
import { BoardMemberSpeechDetailsComponent } from './components/boardMemberSpeeches/board-member-speech-details/board-member-speech-details.component';
import { AllClientsComponent } from './components/clients/all-clients/all-clients.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { UpdateClientComponent } from './components/clients/update-client/update-client.component';
import { DeleteClientComponent } from './components/clients/delete-client/delete-client.component';
import { ClientDetailsComponent } from './components/clients/client-details/client-details.component';
import { AllAddressesComponent } from './components/companyAddresses/all-addresses/all-addresses.component';
import { AddAddressComponent } from './components/companyAddresses/add-address/add-address.component';
import { UpdateAddressComponent } from './components/companyAddresses/update-address/update-address.component';
import { AddressDetailsComponent } from './components/companyAddresses/address-details/address-details.component';
import { DeleteAddressComponent } from './components/companyAddresses/delete-address/delete-address.component';
import { AllJobsComponent } from './components/jobs/all-jobs/all-jobs.component';
import { AddJobComponent } from './components/jobs/add-job/add-job.component';
import { UpdateJobComponent } from './components/jobs/update-job/update-job.component';
import { DeleteJobComponent } from './components/jobs/delete-job/delete-job.component';
import { JobDetailsComponent } from './components/jobs/job-details/job-details.component';
import { AllFormsComponent } from './components/forms/all-forms/all-forms.component';
import { AddFormComponent } from './components/forms/add-form/add-form.component';
import { DeleteFormComponent } from './components/forms/delete-form/delete-form.component';
import { FormDetailsComponent } from './components/forms/form-details/form-details.component';
import { AllPostsComponent } from './components/posts/all-posts/all-posts.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { UpdatePostComponent } from './components/posts/update-post/update-post.component';
import { DeletePostComponent } from './components/posts/delete-post/delete-post.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { AllProductsComponent } from './components/products/all-products/all-products.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { DeleteProductComponent } from './components/products/delete-product/delete-product.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { AllServicesComponent } from './components/Services/all-services/all-services.component';
import { AddServiceComponent } from './components/Services/add-service/add-service.component';
import { UpdateServiceComponent } from './components/Services/update-service/update-service.component';
import { DeleteServiceComponent } from './components/Services/delete-service/delete-service.component';
import { ServiceDetailsComponent } from './components/Services/service-details/service-details.component';
import { AllProjectsComponent } from './components/projects/all-projects/all-projects.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { UpdateProjectComponent } from './components/projects/update-project/update-project.component';
import { DeleteProjectComponent } from './components/projects/delete-project/delete-project.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';
import { AllProjectPhasesComponent } from './components/projectPhases/all-project-phases/all-project-phases.component';
import { AddProjectPhaseComponent } from './components/projectPhases/add-project-phase/add-project-phase.component';
import { UpdateProjectPhaseComponent } from './components/projectPhases/update-project-phase/update-project-phase.component';
import { DeleteProjectPhaseComponent } from './components/projectPhases/delete-project-phase/delete-project-phase.component';
import { ProjectPhaseDetailsComponent } from './components/projectPhases/project-phase-details/project-phase-details.component';
import { AllPhaseItemsComponent } from './components/phaseItems/all-phase-items/all-phase-items.component';
import { AddPhaseItemComponent } from './components/phaseItems/add-phase-item/add-phase-item.component';
import { UpdatePhaseItemComponent } from './components/phaseItems/update-phase-item/update-phase-item.component';
import { DeletePhaseItemComponent } from './components/phaseItems/delete-phase-item/delete-phase-item.component';
import { PhaseItemDetailsComponent } from './components/phaseItems/phase-item-details/phase-item-details.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CompanyComponent } from './components/company/company.component';
import { CompaniesDetailsComponent } from './components/companies-details/companies-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    HomeComponent,
    AddHomeImageComponent,
    AllHomeImagesComponent,
    DeleteHomeImageComponent,
    UpdateHomeImageComponent,
    HomeImageDetailsComponent,
    AllCompaniesComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    DeleteCompanyComponent,
    CompanyDetailsComponent,
    AllBoardMemberComponent,
    AddBoardMemberComponent,
    DeleteBoardMemberComponent,
    UpdateBoardMemberComponent,
    BoardMemberDetailsComponent,
    FooterComponent,
    AllBoardMemberSpeechesComponent,
    AddBoardMemberSpeechComponent,
    UpdateBoardMemberSpeechComponent,
    DeleteBoardMemberSpeechComponent,
    BoardMemberSpeechDetailsComponent,
    AllClientsComponent,
    AddClientComponent,
    UpdateClientComponent,
    DeleteClientComponent,
    ClientDetailsComponent,
    AllAddressesComponent,
    AddAddressComponent,
    UpdateAddressComponent,
    AddressDetailsComponent,
    DeleteAddressComponent,
    AllJobsComponent,
    AddJobComponent,
    UpdateJobComponent,
    DeleteJobComponent,
    JobDetailsComponent,
    AllFormsComponent,
    AddFormComponent,
    DeleteFormComponent,
    FormDetailsComponent,
    AllPostsComponent,
    AddPostComponent,
    UpdatePostComponent,
    DeletePostComponent,
    PostDetailsComponent,
    AllProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ProductDetailsComponent,
    AllServicesComponent,
    AddServiceComponent,
    UpdateServiceComponent,
    DeleteServiceComponent,
    ServiceDetailsComponent,
    AllProjectsComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    DeleteProjectComponent,
    ProjectDetailsComponent,
    AllProjectPhasesComponent,
    AddProjectPhaseComponent,
    UpdateProjectPhaseComponent,
    DeleteProjectPhaseComponent,
    ProjectPhaseDetailsComponent,
    AllPhaseItemsComponent,
    AddPhaseItemComponent,
    UpdatePhaseItemComponent,
    DeletePhaseItemComponent,
    PhaseItemDetailsComponent,
    SignInComponent,
    CompanyComponent,
    CompaniesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right' }),
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    CommonModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
