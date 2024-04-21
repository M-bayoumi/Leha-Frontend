import { Component, OnInit } from '@angular/core';
import { IHomeImageRead } from '../../../models/HomeImage/ihome-image-read';
import { HomeImageService } from '../../../services/homeImages/home-image.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddHomeImageComponent } from '../add-home-image/add-home-image.component';
import { UpdateHomeImageComponent } from '../update-home-image/update-home-image.component';
import { DeleteHomeImageComponent } from '../delete-home-image/delete-home-image.component';
import { HomeImageDetailsComponent } from '../home-image-details/home-image-details.component';
import { CompanyService } from '../../../services/companies/company.service';
import { ICompanyRead } from '../../../models/Company/icompany-read';

@Component({
  selector: 'app-all-home-images',
  templateUrl: './all-home-images.component.html',
  styleUrls: ['./all-home-images.component.scss'],
})
export class AllHomeImagesComponent implements OnInit {
  homeImages: IHomeImageRead[] = [];
  companies: ICompanyRead[] = [];

  constructor(
    private homeImageService: HomeImageService,
    private companyService: CompanyService,

    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllCompanies();
  }

  FilterHomeImages(companyId: any) {
    if (companyId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByCompanyId(companyId.value);
    }
  }

  GetAllByCompanyId(companyId: number) {
    this.homeImageService.GetAllByCompanyId(companyId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.homeImages = response.data;
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
    this.homeImageService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.homeImages = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddHomeImageComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(homeImage: IHomeImageRead) {
    const dialogRef = this.dialog.open(UpdateHomeImageComponent, {
      width: '750px',
      data: homeImage,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Details(homeImage: IHomeImageRead) {
    const dialogRef = this.dialog.open(HomeImageDetailsComponent, {
      width: '750px',
      data: homeImage,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(homeImageId: number) {
    const dialogRef = this.dialog.open(DeleteHomeImageComponent, {
      width: '750px',
      data: homeImageId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
