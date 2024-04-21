import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IHomeImageRead } from '../../../models/HomeImage/ihome-image-read';

@Component({
  selector: 'app-home-image-details',
  templateUrl: './home-image-details.component.html',
  styleUrls: ['./home-image-details.component.scss'],
})
export class HomeImageDetailsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<HomeImageDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IHomeImageRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      companyName: [data?.companyName || ''],
      imageURL: [data?.imageURL || ''],
    });
  }
  ngOnInit(): void {}

  get id() {
    return this.form.get('id');
  }
  get imageURL() {
    return this.form.get('imageURL');
  }
  get companyName() {
    return this.form.get('companyName');
  }
}
