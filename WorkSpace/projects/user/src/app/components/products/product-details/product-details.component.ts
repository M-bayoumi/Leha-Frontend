import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProductDetails } from '../../../models/Product/iproduct-details';
import { IProductRead } from '../../../models/Product/iproduct-read';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProductRead
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
