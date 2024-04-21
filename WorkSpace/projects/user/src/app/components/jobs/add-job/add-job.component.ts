import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { CompanyService } from '../../../services/companies/company.service';
import { JobService } from '../../../services/jobs/job.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})

export class AddJobComponent implements OnInit {
  form: FormGroup;
  companies: ICompanyRead[] = [];
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private jobService: JobService,
    private dialog: MatDialogRef<AddJobComponent>,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      titleAr: ['', [Validators.required]],
      titleEn: ['', [Validators.required]],
      descriptionAr: ['', [Validators.required]],
      descriptionEn: ['', [Validators.required]],
      averageSalary: ['', [Validators.required]],
      companyId: [0, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllCompanies();
  }


  Add() {
    let formData = new FormData();
    formData.append('titleAr', this.titleAr?.value);
    formData.append('titleEn', this.titleEn?.value);
    formData.append('descriptionAr', this.descriptionAr?.value);
    formData.append('descriptionEn', this.descriptionEn?.value);
    formData.append('averageSalary', this.averageSalary?.value);
    formData.append('companyId', this.companyId?.value);

    this.jobService.Add(formData).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.dialog.close(true);
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

  get titleAr() {
    return this.form.get('titleAr');
  }
  get titleEn() {
    return this.form.get('titleEn');
  }
  get descriptionAr() {
    return this.form.get('descriptionAr');
  }
  get descriptionEn() {
    return this.form.get('descriptionEn');
  }
  get averageSalary() {
    return this.form.get('averageSalary');
  }
  get companyId() {
    return this.form.get('companyId');
  }
}
