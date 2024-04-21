import { Component, OnInit } from '@angular/core';
import { IJobRead } from '../../../models/Job/ijob-read';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { JobService } from '../../../services/jobs/job.service';
import { CompanyService } from '../../../services/companies/company.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddJobComponent } from '../add-job/add-job.component';
import { UpdateJobComponent } from '../update-job/update-job.component';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { DeleteJobComponent } from '../delete-job/delete-job.component';
import { IJobDetails } from '../../../models/Job/ijob-details';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.scss'],
})
export class AllJobsComponent implements OnInit {
  jobs: IJobRead[] = [];
  companies: ICompanyRead[] = [];
  jobDetails!: IJobDetails;

  constructor(
    private jobService: JobService,
    private companyService: CompanyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllCompanies();
  }

  FilterJobs(companyId: any) {
    if (companyId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByCompanyId(companyId.value);
    }
  }

  GetAllByCompanyId(companyId: number) {
    this.jobService.GetAllByCompanyId(companyId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.jobs = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }
  GetAllCompanies() {
    this.companyService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.companies = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAll() {
    this.jobService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.jobs = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddJobComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(job: IJobRead) {
    this.jobService.GetDetails(job.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.jobDetails = response.data;
        this.GetDetails(this.jobDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(job: IJobDetails) {
    const dialogRef = this.dialog.open(UpdateJobComponent, {
      width: '750px',
      data: job,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Details(job: IJobRead) {
    const dialogRef = this.dialog.open(JobDetailsComponent, {
      width: '750px',
      data: job,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(jobId: number) {
    const dialogRef = this.dialog.open(DeleteJobComponent, {
      width: '750px',
      data: jobId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
