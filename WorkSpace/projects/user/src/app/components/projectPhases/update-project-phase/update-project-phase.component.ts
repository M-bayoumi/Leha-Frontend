import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProjectRead } from '../../../models/Project/iproject-read';
import { ProjectPhaseService } from '../../../services/projectPhases/project-phase.service';
import { ProjectService } from '../../../services/projects/project.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProjectPhaseDetails } from '../../../models/ProjectPhase/iproject-phase-details';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-update-project-phase',
  templateUrl: './update-project-phase.component.html',
  styleUrls: ['./update-project-phase.component.scss'],
})
export class UpdateProjectPhaseComponent {
  form: FormGroup;
  projects: IProjectRead[] = [];

  constructor(
    private fb: FormBuilder,
    private projectPhaseService: ProjectPhaseService,
    private projectService: ProjectService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdateProjectPhaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProjectPhaseDetails
  ) {
    this.form = this.fb.group({
      Id: [data?.id || 0, [Validators.required]],
      nameAr: [data?.nameAr || '', [Validators.required]],
      nameEn: [data?.nameEn || '', [Validators.required]],
      projectId: [data?.projectId || '', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllProjects();
  }

  GetAllProjects() {
    this.projectService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.projects = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Update() {
    let formData = new FormData();
    formData.append('Id', this.Id?.value);
    formData.append('nameAr', this.nameAr?.value);
    formData.append('nameEn', this.nameEn?.value);
    formData.append('projectId', this.projectId?.value);

    this.projectPhaseService.Update(formData).subscribe({
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
  get projectId() {
    return this.form.get('projectId');
  }
}
