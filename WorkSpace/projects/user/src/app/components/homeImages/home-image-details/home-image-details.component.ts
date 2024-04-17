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
  homeImageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<HomeImageDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IHomeImageRead
  ) {
    this.homeImageForm = this.fb.group({
      id: [data?.id || ''],
      companyName: [data?.companyName || ''],
      imageURL: [data?.imageURL || ''],
    });
  }
  ngOnInit(): void {}

  get id() {
    return this.homeImageForm.get('id');
  }
  get imageURL() {
    return this.homeImageForm.get('imageURL');
  }
  get companyName() {
    return this.homeImageForm.get('companyName');
  }
}
