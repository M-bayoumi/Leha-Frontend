import { Component, OnInit } from '@angular/core';
import { IClientRead } from '../../../models/Client/iclient-read';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { ClientService } from '../../../services/clients/client.service';
import { CompanyService } from '../../../services/companies/company.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddClientComponent } from '../add-client/add-client.component';
import { UpdateClientComponent } from '../update-client/update-client.component';
import { DeleteClientComponent } from '../delete-client/delete-client.component';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import { IClientDetails } from '../../../models/Client/iclient-details';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.scss']
})

export class AllClientsComponent implements OnInit {
  clients: IClientRead[] = [];
  companies: ICompanyRead[] = [];
  clientDetails!: IClientDetails;

  constructor(
    private clientService: ClientService,
    private companyService: CompanyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllCompanies();
  }

  FilterClients(companyId: any) {
    if (companyId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByCompanyId(companyId.value);
    }
  }

  GetAllByCompanyId(companyId: number) {
    this.clientService.GetAllByCompanyId(companyId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.clients = response.data;
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
    this.clientService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.clients = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddClientComponent , {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(client: IClientRead) {
    this.clientService.GetDetails(client.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.clientDetails = response.data;
        this.GetDetails(this.clientDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(client: IClientDetails) {
    const dialogRef = this.dialog.open(UpdateClientComponent, {
      width: '750px',
      data: client,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Details(client: IClientRead) {
    const dialogRef = this.dialog.open(ClientDetailsComponent, {
      width: '750px',
      data: client,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(clientId: number) {
    const dialogRef = this.dialog.open(DeleteClientComponent, {
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
