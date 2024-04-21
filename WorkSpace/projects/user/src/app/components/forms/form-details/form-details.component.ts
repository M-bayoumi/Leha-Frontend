import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IFormDetails } from '../../../models/Form/iform-details';
import { IFormRead } from '../../../models/Form/iform-read';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss'],
})
export class FormDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<FormDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFormRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      fullName: [data?.fullName || ''],
      address: [data?.address || ''],
      jobTitle: [data?.jobTitle || ''],
      cV: [data?.cv || ''],
    });
    console.log(this.cV)
  }
  ngOnInit(): void {}

  get id() {
    return this.form.get('id');
  }
  get fullName() {
    return this.form.get('fullName');
  }
  get address() {
    return this.form.get('address');
  }
  get jobTitle() {
    return this.form.get('jobTitle');
  }
  get cV() {
    return this.form.get('cV');
  }
}
