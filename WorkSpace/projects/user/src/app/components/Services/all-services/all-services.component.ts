import { Component, OnInit } from '@angular/core';
import { IServiceRead } from '../../../models/Service/iservice-read';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { ServiceService } from '../../../services/services/service.service';
import { CompanyService } from '../../../services/companies/company.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddServiceComponent } from '../add-service/add-service.component';
import { UpdateServiceComponent } from '../update-service/update-service.component';
import { ServiceDetailsComponent } from '../service-details/service-details.component';
import { DeleteServiceComponent } from '../delete-service/delete-service.component';
import { IServiceDetails } from '../../../models/Service/iservice-details';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss'],
})
export class AllServicesComponent implements OnInit {
  services: IServiceRead[] = [];
  companies: ICompanyRead[] = [];
  serviceDetails!: IServiceDetails;

  constructor(
    private serviceService: ServiceService,
    private companyService: CompanyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllCompanies();
  }

  FilterServices(companyId: any) {
    if (companyId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByCompanyId(companyId.value);
    }
  }

  GetAllByCompanyId(companyId: number) {
    this.serviceService.GetAllByCompanyId(companyId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.services = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }
  GetAllCompanies() {
    this.companyService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.companies = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAll() {
    this.serviceService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.services = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddServiceComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(service: IServiceRead) {
    this.serviceService.GetDetails(service.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.serviceDetails = response.data;
        this.GetDetails(this.serviceDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(service: IServiceDetails) {
    const dialogRef = this.dialog.open(UpdateServiceComponent, {
      width: '750px',
      data: service,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Details(service: IServiceRead) {
    const dialogRef = this.dialog.open(ServiceDetailsComponent, {
      width: '750px',
      data: service,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(serviceId: number) {
    const dialogRef = this.dialog.open(DeleteServiceComponent, {
      width: '750px',
      data: serviceId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
