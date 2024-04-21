import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProjectRead } from '../../../models/Project/iproject-read';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<ProjectDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProjectRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      name: [data?.name || ''],
      description: [data?.description || ''],
      address: [data?.address || ''],
      image: [data?.image || ''],
      siteEngineerName: [data?.siteEngineerName || ''],
      projectProgressPercentage: [data?.projectProgressPercentage || ''],
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
  get address() {
    return this.form.get('address');
  }
  get image() {
    return this.form.get('image');
  }
  get siteEngineerName() {
    return this.form.get('siteEngineerName');
  }
  get projectProgressPercentage() {
    return this.form.get('projectProgressPercentage');
  }
  get companyName() {
    return this.form.get('companyName');
  }
}
