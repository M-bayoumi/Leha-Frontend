import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPostRead } from '../../../models/Post/ipost-read';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { PostService } from '../../../services/posts/post.service';
import { CompanyService } from '../../../services/companies/company.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPostDetails } from '../../../models/Post/ipost-details';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})

export class UpdatePostComponent {
  form: FormGroup;
  companies: ICompanyRead[] = [];
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private companyService: CompanyService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdatePostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPostDetails
  ) {
    this.form = this.fb.group({
      Id: [data?.id || 0, [Validators.required]],
      contentAr: [data?.contentAr || '', [Validators.required]],
      contentEn: [data?.contentEn || '', [Validators.required]],
      image: [data?.image || '', [Validators.required]],
      companyId: [data?.companyId || '', [Validators.required]],
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
    formData.append('contentAr', this.contentAr?.value);
    formData.append('contentEn', this.contentEn?.value);
    formData.append('companyId', this.companyId?.value);
    formData.append('file', this.selectedFile);

    this.postService.Update(formData).subscribe({
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
  get contentAr() {
    return this.form.get('contentAr');
  }
  get contentEn() {
    return this.form.get('contentEn');
  }
  get companyId() {
    return this.form.get('companyId');
  }
}
