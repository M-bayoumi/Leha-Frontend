import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { HomeImageService } from '../../../services/homeImages/home-image.service';
import { CompanyService } from '../../../services/companies/company.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-add-home-image',
  templateUrl: './add-home-image.component.html',
  styleUrls: ['./add-home-image.component.scss'],
})
export class AddHomeImageComponent implements OnInit {
  form: FormGroup;
  companies: ICompanyRead[] = [];
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private homeImageService: HomeImageService,
    private companyService: CompanyService,
    private dialog: MatDialogRef<AddHomeImageComponent>,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      companyId: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllCompanies();
  }

  SelectImage(event: any) {
    this.selectedFile = event.target.files[0];
  }

  Add() {
    let formData = new FormData();
    formData.append('companyId', this.companyId?.value);
    formData.append('file', this.selectedFile);

    this.homeImageService.Add(formData).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.dialog.close(true);
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

  get companyId() {
    return this.form.get('companyId');
  }
}
