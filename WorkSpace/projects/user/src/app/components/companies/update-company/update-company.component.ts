import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../../services/companies/company.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss'],
})
export class UpdateCompanyComponent {
  companyForm: FormGroup;

  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdateCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICompanyRead
  ) {
    this.companyForm = this.fb.group({
      Id: [data.id, [Validators.required]],
      nameAr: [
        '',
        [
          Validators.required,
        ],
      ],
      nameEn: [
        '',
        [
          Validators.required,
        ],
      ],
      sloganAr: [
        '',
        [
          Validators.required,
        ],
      ],
      sloganEn: [
        '',
        [
          Validators.required,
        ],
      ],
      employees: [
        '',
        [
          Validators.required,
          this.minValueValidator(2),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: ['', [Validators.required]],
      link: [
        '',
        [
          Validators.required,
        ],
      ],
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
    return this.companyForm.get('Id');
  }
  get nameAr() {
    return this.companyForm.get('nameAr');
  }
  get nameEn() {
    return this.companyForm.get('nameEn');
  }
  get sloganAr() {
    return this.companyForm.get('sloganAr');
  }
  get sloganEn() {
    return this.companyForm.get('sloganEn');
  }

  get employees() {
    return this.companyForm.get('employees');
  }
  get email() {
    return this.companyForm.get('email');
  }
  get phone() {
    return this.companyForm.get('phone');
  }

  get link() {
    return this.companyForm.get('link');
  }
}
