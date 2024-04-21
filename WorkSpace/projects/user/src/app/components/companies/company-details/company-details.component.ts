import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICompanyRead } from '../../../models/Company/icompany-read';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<CompanyDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICompanyRead
  ) {
    this.form = this.fb.group({
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
    return this.form.get('id');
  }
  get name() {
    return this.form.get('name');
  }
  get slogan() {
    return this.form.get('slogan');
  }
  get employees() {
    return this.form.get('employees');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }

  get link() {
    return this.form.get('link');
  }
  get image() {
    return this.form.get('image');
  }
}
