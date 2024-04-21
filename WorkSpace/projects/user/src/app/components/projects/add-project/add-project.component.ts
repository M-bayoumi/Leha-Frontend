import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { CompanyService } from '../../../services/companies/company.service';
import { ProjectService } from '../../../services/projects/project.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})

export class AddProjectComponent implements OnInit {
  form: FormGroup;
  companies: ICompanyRead[] = [];
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private projectService: ProjectService,
    private dialog: MatDialogRef<AddProjectComponent>,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      nameAr: ['', [Validators.required]],
      nameEn: ['', [Validators.required]],
      descriptionAr: ['', [Validators.required]],
      descriptionEn: ['', [Validators.required]],
      addressAr: ['', [Validators.required]],
      addressEn: ['', [Validators.required]],
      siteEngineerNameAr: ['', [Validators.required]],
      siteEngineerNameEn: ['', [Validators.required]],
      companyId: [0, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllCompanies();
  }

  SelectImage(event: any) {
    this.selectedFile = event.target.files[0];
  }

  Add() {
    let formData = new FormData();
    formData.append('nameAr', this.nameAr?.value);
    formData.append('nameEn', this.nameEn?.value);
    formData.append('descriptionAr', this.descriptionAr?.value);
    formData.append('descriptionEn', this.descriptionEn?.value);
    formData.append('addressAr', this.addressAr?.value);
    formData.append('addressEn', this.addressEn?.value);
    formData.append('siteEngineerNameAr', this.siteEngineerNameAr?.value);
    formData.append('siteEngineerNameEn', this.siteEngineerNameEn?.value);
    formData.append('companyId', this.companyId?.value);
    formData.append('file', this.selectedFile);

    this.projectService.Add(formData).subscribe({
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

  get nameAr() {
    return this.form.get('nameAr');
  }
  get nameEn() {
    return this.form.get('nameEn');
  }
  get descriptionAr() {
    return this.form.get('descriptionAr');
  }
  get descriptionEn() {
    return this.form.get('descriptionEn');
  }
  get addressAr() {
    return this.form.get('addressAr');
  }
  get addressEn() {
    return this.form.get('addressEn');
  }
  get siteEngineerNameAr() {
    return this.form.get('siteEngineerNameAr');
  }
  get siteEngineerNameEn() {
    return this.form.get('siteEngineerNameEn');
  }
  get companyId() {
    return this.form.get('companyId');
  }
}
