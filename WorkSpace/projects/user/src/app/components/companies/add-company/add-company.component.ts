import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../../services/companies/company.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent implements OnInit {
  companyForm: FormGroup;
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private dialog: MatDialogRef<AddCompanyComponent>,
    private toastr: ToastrService
  ) {
    this.companyForm = this.fb.group({
      nameAr: ['', [Validators.required]],
      nameEn: ['', [Validators.required]],
      sloganAr: ['', [Validators.required]],
      sloganEn: ['', [Validators.required]],
      employees: [2, [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: ['', [Validators.required]],
      link: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  SelectImage(event: any) {
    this.selectedFile = event.target.files[0];
  }

  Add() {
    let formData = new FormData();
    formData.append('nameAr', this.nameAr?.value);
    formData.append('nameEn', this.nameEn?.value);
    formData.append('sloganAr', this.sloganAr?.value);
    formData.append('sloganEn', this.sloganEn?.value);
    formData.append('employees', this.employees?.value);
    formData.append('email', this.email?.value);
    formData.append('phone', this.phone?.value);
    formData.append('link', this.link?.value);
    formData.append('file', this.selectedFile);

    this.companyService.Add(formData).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.dialog.close(true);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  get nameAr() {
    return this.companyForm.get('nameAr');
  }
  get nameEn() {
    return this.companyForm.get('nameEn');
  }
  get sloganAr() {
    return this.companyForm.get('sloganAr');
  }
  get sloganEn() {
    return this.companyForm.get('sloganEn');
  }

  get employees() {
    return this.companyForm.get('employees');
  }
  get email() {
    return this.companyForm.get('email');
  }
  get phone() {
    return this.companyForm.get('phone');
  }

  get link() {
    return this.companyForm.get('link');
  }
}
