import { Component, OnInit } from '@angular/core';
import { IFormRead } from '../../../models/Form/iform-read';
import { IJobRead } from '../../../models/Job/ijob-read';
import { FormService } from '../../../services/forms/form.service';
import { JobService } from '../../../services/jobs/job.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddJobComponent } from '../../jobs/add-job/add-job.component';
import { FormDetailsComponent } from '../form-details/form-details.component';
import { DeleteFormComponent } from '../delete-form/delete-form.component';

@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.scss']
})


export class AllFormsComponent implements OnInit {
  forms: IFormRead[] = [];
  jobs: IJobRead[] = [];

  constructor(
    private formService: FormService,
    private jobService: JobService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllJobs();
  }

  FilterForms(jobId: any) {
    if (jobId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByJobId(jobId.value);
    }
  }

  GetAllByJobId(jobId: number) {
    this.formService.GetAllByJobId(jobId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.forms = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }
  GetAllJobs() {
    this.jobService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.jobs = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAll() {
    this.formService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.forms = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }


  Details(form: IFormRead) {
    const dialogRef = this.dialog.open(FormDetailsComponent, {
      width: '750px',
      data: form,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(formId: number) {
    const dialogRef = this.dialog.open(DeleteFormComponent, {
      width: '750px',
      data: formId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
