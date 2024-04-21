import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IResponse } from '../../../models/iresponse';
import { IJobRead } from '../../../models/Job/ijob-read';
import { JobService } from '../../../services/jobs/job.service';
import { FormService } from '../../../services/forms/form.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  form: FormGroup;
  response: IResponse = {} as IResponse;
  jobs: IJobRead[] = [];
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private formService: FormService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = fb.group({
      fullNameAr: ['', [Validators.required]],
      fullNameEn: ['', [Validators.required]],
      addressAr: ['', [Validators.required]],
      addressEn: ['', [Validators.required]],
      jobTitleAr: ['', [Validators.required]],
      jobTitleEn: ['', [Validators.required]],
      jobId: [0, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.GetAllJobs();
  }
  SelectImage(event: any) {
    this.selectedFile = event.target.files[0];
  }
  submit() {
    let formData = new FormData();
    formData.append('fullNameAr', this.fullNameAr?.value);
    formData.append('fullNameEn', this.fullNameEn?.value);
    formData.append('addressAr', this.addressAr?.value);
    formData.append('addressEn', this.addressEn?.value);
    formData.append('jobTitleAr', this.jobTitleAr?.value);
    formData.append('jobTitleEn', this.jobTitleEn?.value);
    formData.append('jobId', this.jobId?.value);
    formData.append('file', this.selectedFile);

    this.formService.Add(formData).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.router.navigate(['/home']);
      },
      // error: (e) => {
      //   this.toaster.error('Register failed');
      // },
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

  get fullNameAr() {
    return this.form.get('fullNameAr');
  }
  get fullNameEn() {
    return this.form.get('fullNameEn');
  }
  get addressAr() {
    return this.form.get('addressAr');
  }
  get addressEn() {
    return this.form.get('addressEn');
  }
  get jobTitleAr() {
    return this.form.get('jobTitleAr');
  }
  get jobTitleEn() {
    return this.form.get('jobTitleEn');
  }
  get jobId() {
    return this.form.get('jobId');
  }
}
