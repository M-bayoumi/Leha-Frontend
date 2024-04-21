import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IServiceRead } from '../../../models/Service/iservice-read';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<ServiceDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IServiceRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      name: [data?.name || ''],
      description: [data?.description || ''],
      image: [data?.image || ''],
      companyName: [data?.companyName || ''],
    });
  }
  ngOnInit(): void {}

  get id() {
    return this.form.get('id');
  }
  get name() {
    return this.form.get('name');
  }
  get description() {
    return this.form.get('description');
  }
  get image() {
    return this.form.get('image');
  }
  get companyName() {
    return this.form.get('companyName');
  }
}
