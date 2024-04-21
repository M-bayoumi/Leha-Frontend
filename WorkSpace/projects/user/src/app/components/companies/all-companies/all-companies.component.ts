import { Component, OnInit } from '@angular/core';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { CompanyService } from '../../../services/companies/company.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddCompanyComponent } from '../add-company/add-company.component';
import { UpdateCompanyComponent } from '../update-company/update-company.component';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { DeleteCompanyComponent } from '../delete-company/delete-company.component';
import { ICompanyDetails } from '../../../models/Company/icompany-details';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.scss'],
})
export class AllCompaniesComponent implements OnInit {
  companies: ICompanyRead[] = [];
  companyDetails!: ICompanyDetails;

  constructor(
    private companyService: CompanyService,

    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.companyService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.companies = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddCompanyComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(company: ICompanyRead) {
    this.companyService.GetDetails(company.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.companyDetails = response.data;
        this.GetDetails(this.companyDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(company: ICompanyDetails) {
    const dialogRef = this.dialog.open(UpdateCompanyComponent, {
      width: '750px',
      data: company,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Details(company: ICompanyRead) {
    const dialogRef = this.dialog.open(CompanyDetailsComponent, {
      width: '750px',
      data: company,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(companyId: number) {
    const dialogRef = this.dialog.open(DeleteCompanyComponent, {
      width: '750px',
      data: companyId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
