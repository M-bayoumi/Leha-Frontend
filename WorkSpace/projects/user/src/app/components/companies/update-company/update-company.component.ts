import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../../services/companies/company.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { ICompanyDetails } from '../../../models/Company/icompany-details';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss'],
})
export class UpdateCompanyComponent {
  form: FormGroup;

  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdateCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICompanyDetails
  ) {
    this.form = this.fb.group({
      Id: [data?.id || 0, [Validators.required]],
      nameAr: [data?.nameAr || '', [Validators.required]],
      nameEn: [data?.nameEn || '', [Validators.required]],
      sloganAr: [data?.sloganAr || '', [Validators.required]],
      sloganEn: [data?.sloganEn || '', [Validators.required]],
      employees: [
        data?.employees || 2,
        [Validators.required, this.minValueValidator(2)],
      ],
      email: [
        data?.email || '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: [data?.phone || '', [Validators.required]],
      link: [data?.link || '', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  minValueValidator(minValue: number) {
    return (control: any) => {
      if (control.value < minValue) {
        return { minValue: { minValue } };
      }
      return null;
    };
  }

  SelectImage(event: any) {
    this.selectedFile = event.target.files[0];
  }

  Update() {
    let formData = new FormData();
    formData.append('Id', this.Id?.value);
    formData.append('nameAr', this.nameAr?.value);
    formData.append('nameEn', this.nameEn?.value);
    formData.append('sloganAr', this.sloganAr?.value);
    formData.append('sloganEn', this.sloganEn?.value);
    formData.append('employees', this.employees?.value);
    formData.append('email', this.email?.value);
    formData.append('phone', this.phone?.value);
    formData.append('link', this.link?.value);
    formData.append('file', this.selectedFile);

    this.companyService.Update(formData).subscribe({
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
  get nameAr() {
    return this.form.get('nameAr');
  }
  get nameEn() {
    return this.form.get('nameEn');
  }
  get sloganAr() {
    return this.form.get('sloganAr');
  }
  get sloganEn() {
    return this.form.get('sloganEn');
  }

  get employees() {
    return this.form.get('employees');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }

  get link() {
    return this.form.get('link');
  }
}
