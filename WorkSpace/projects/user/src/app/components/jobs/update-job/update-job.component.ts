import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IJobRead } from '../../../models/Job/ijob-read';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { JobService } from '../../../services/jobs/job.service';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../../../services/companies/company.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IJobDetails } from '../../../models/Job/ijob-details';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.scss']
})

export class UpdateJobComponent {
  form: FormGroup;
  jobs: IJobRead[] = [];
  companies: ICompanyRead[] = [];

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private companyService: CompanyService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdateJobComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IJobDetails
  ) {
    this.form = this.fb.group({
      Id: [data?.id || 0, [Validators.required]],
      titleAr: [data?.titleAr, [Validators.required]],
      titleEn: [data?.titleEn, [Validators.required]],
      descriptionAr: [data?.descriptionAr, [Validators.required]],
      descriptionEn: [data?.descriptionEn, [Validators.required]],
      averageSalary: [data?.averageSalary, [Validators.required]],
      companyId: [data?.companyId, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllCompanies();
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

  Update() {
    let formData = new FormData();
    formData.append('Id', this.Id?.value);
    formData.append('titleAr', this.titleAr?.value);
    formData.append('titleEn', this.titleEn?.value);
    formData.append('descriptionAr', this.descriptionAr?.value);
    formData.append('descriptionEn', this.descriptionEn?.value);
    formData.append('averageSalary', this.averageSalary?.value);
    formData.append('companyId', this.companyId?.value);

    this.jobService.Update(formData).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.dialog.close(true);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  get Id() {
    return this.form.get('Id');
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
