import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { HomeImageService } from '../../../services/homeImages/home-image.service';
import { CompanyService } from '../../../services/companies/company.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IHomeImageRead } from '../../../models/HomeImage/ihome-image-read';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-update-home-image',
  templateUrl: './update-home-image.component.html',
  styleUrls: ['./update-home-image.component.scss']
})

export class UpdateHomeImageComponent {
  homeImageForm: FormGroup;
  companies: ICompanyRead[] = [];

  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private homeImageService: HomeImageService,
    private companyService: CompanyService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdateHomeImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IHomeImageRead
  ) {
    this.homeImageForm = this.fb.group({
      Id: [data.id, [Validators.required]],
      companyId: [data.id, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllCompanies();
  }

  SelectImage(event: any) {
    this.selectedFile = event.target.files[0];
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
    formData.append('companyId', this.companyId?.value);
    formData.append('file', this.selectedFile);

    this.homeImageService
      .Update(formData)
      .subscribe({
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
    return this.homeImageForm.get('Id');
  }
  get companyId() {
    return this.homeImageForm.get('companyId');
  }
}
