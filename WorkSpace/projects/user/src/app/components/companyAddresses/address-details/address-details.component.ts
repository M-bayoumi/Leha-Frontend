import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICompanyAddressRead } from '../../../models/CompanyAddress/icompany-address-read';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})

export class AddressDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<AddressDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICompanyAddressRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      address: [data?.address || ''],
      companyImage: [data?.companyImage || ''],
      companyName: [data?.companyName || ''],
    });
  }
  ngOnInit(): void {}

  get id() {
    return this.form.get('id');
  }
  get address() {
    return this.form.get('address');
  }
  get companyImage() {
    return this.form.get('companyImage');
  }
  get companyName() {
    return this.form.get('companyName');
  }
}
