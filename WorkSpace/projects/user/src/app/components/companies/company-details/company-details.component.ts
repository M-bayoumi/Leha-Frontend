import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICompanyRead } from '../../../models/Company/icompany-read';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})

export class CompanyDetailsComponent implements OnInit {
  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<CompanyDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICompanyRead
  ) {
    this.companyForm = this.fb.group({
      id: [data?.id || ''],
      name: [data?.name || ''],
      slogan: [data?.slogan || ''],
      employees: [data?.employees || ''],
      email: [data?.email || ''],
      phone: [data?.phone || ''],
      link: [data?.link || ''],
      image: [data?.image || ''],
    });
  }
  ngOnInit(): void {}

  get id() {
    return this.companyForm.get('id');
  }
  get name() {
    return this.companyForm.get('name');
  }
  get slogan() {
    return this.companyForm.get('slogan');
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
  get image() {
    return this.companyForm.get('image');
  }
}
