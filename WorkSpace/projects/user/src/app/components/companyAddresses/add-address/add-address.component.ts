import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { CompanyService } from '../../../services/companies/company.service';
import { CompanyAddressService } from '../../../services/companyAddresses/company-address.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})

export class AddAddressComponent implements OnInit {
  form: FormGroup;
  companies: ICompanyRead[] = [];

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private companyAddressService: CompanyAddressService,
    private dialog: MatDialogRef<AddAddressComponent>,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      addressAr: ['', [Validators.required]],
      addressEn: ['', [Validators.required]],
      companyId: [0, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllCompanies();
  }


  Add() {
    let formData = new FormData();
    formData.append('addressAr', this.addressAr?.value);
    formData.append('addressEn', this.addressEn?.value);
    formData.append('companyId', this.companyId?.value);

    this.companyAddressService.Add(formData).subscribe({
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

  get addressAr() {
    return this.form.get('addressAr');
  }
  get addressEn() {
    return this.form.get('addressEn');
  }
  get companyId() {
    return this.form.get('companyId');
  }
}
