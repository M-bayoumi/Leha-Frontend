import { Component, OnInit } from '@angular/core';
import { ICompanyAddressRead } from '../../../models/CompanyAddress/icompany-address-read';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { CompanyAddressService } from '../../../services/companyAddresses/company-address.service';
import { CompanyService } from '../../../services/companies/company.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddAddressComponent } from '../add-address/add-address.component';
import { UpdateAddressComponent } from '../update-address/update-address.component';
import { AddressDetailsComponent } from '../address-details/address-details.component';
import { DeleteAddressComponent } from '../delete-address/delete-address.component';
import { ICompanyAddressDetails } from '../../../models/CompanyAddress/icompany-address-details';

@Component({
  selector: 'app-all-addresses',
  templateUrl: './all-addresses.component.html',
  styleUrls: ['./all-addresses.component.scss']
})

export class AllAddressesComponent implements OnInit {
  addresses: ICompanyAddressRead[] = [];
  companies: ICompanyRead[] = [];
  companyAddressDetails!: ICompanyAddressDetails;

  constructor(
    private companyAddressService: CompanyAddressService,
    private companyService: CompanyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllCompanies();
  }

  FilterAddresses(companyId: any) {
    if (companyId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByCompanyId(companyId.value);
    }
  }

  GetAllByCompanyId(companyId: number) {
    this.companyAddressService.GetAllByCompanyId(companyId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.addresses = response.data;
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
    this.companyAddressService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.addresses = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddAddressComponent , {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(address: ICompanyAddressRead) {
    this.companyAddressService.GetDetails(address.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.companyAddressDetails = response.data;
        this.GetDetails(this.companyAddressDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(address: ICompanyAddressDetails) {
    const dialogRef = this.dialog.open(UpdateAddressComponent, {
      width: '750px',
      data: address,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Details(address: ICompanyAddressRead) {
    const dialogRef = this.dialog.open(AddressDetailsComponent, {
      width: '750px',
      data: address,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(clientId: number) {
    const dialogRef = this.dialog.open(DeleteAddressComponent, {
      width: '750px',
      data: clientId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
