import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IClientRead } from '../../../models/Client/iclient-read';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
})
export class ClientDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<ClientDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IClientRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      name: [data?.name || ''],
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
  get image() {
    return this.form.get('image');
  }
  get companyName() {
    return this.form.get('companyName');
  }
}
