import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IJobRead } from '../../../models/Job/ijob-read';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})

export class JobDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<JobDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IJobRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      title: [data?.title || ''],
      description: [data?.description || ''],
      averageSalary: [data?.averageSalary || ''],
      dateTime: [data?.dateTime || ''],
      companyName: [data?.companyName || ''],
    });
  }
  ngOnInit(): void {}

  get id() {
    return this.form.get('id');
  }
  get title() {
    return this.form.get('title');
  }
  get description() {
    return this.form.get('description');
  }
  get averageSalary() {
    return this.form.get('averageSalary');
  }
  get dateTime() {
    return this.form.get('dateTime');
  }
  get companyName() {
    return this.form.get('companyName');
  }
}
