import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProjectRead } from '../../../models/Project/iproject-read';
import { ProjectService } from '../../../services/projects/project.service';
import { ProjectPhaseService } from '../../../services/projectPhases/project-phase.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-add-project-phase',
  templateUrl: './add-project-phase.component.html',
  styleUrls: ['./add-project-phase.component.scss'],
})
export class AddProjectPhaseComponent implements OnInit {
  form: FormGroup;
  projects: IProjectRead[] = [];

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private projectPhaseService: ProjectPhaseService,
    private dialog: MatDialogRef<AddProjectPhaseComponent>,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      nameAr: ['', [Validators.required]],
      nameEn: ['', [Validators.required]],
      projectId: [0, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllProjects();
  }

  Add() {
    let formData = new FormData();
    formData.append('nameAr', this.nameAr?.value);
    formData.append('nameEn', this.nameEn?.value);
    formData.append('projectId', this.projectId?.value);

    this.projectPhaseService.Add(formData).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.dialog.close(true);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
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
