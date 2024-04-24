import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProjectPhaseRead } from '../../../models/ProjectPhase/iproject-phase-read';

@Component({
  selector: 'app-project-phase-details',
  templateUrl: './project-phase-details.component.html',
  styleUrls: ['./project-phase-details.component.scss'],
})
export class ProjectPhaseDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<ProjectPhaseDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProjectPhaseRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      name: [data?.name || ''],
      projectImage: [data?.projectImage || ''],
      projectName: [data?.projectName || ''],
    });
  }
  ngOnInit(): void {}

  get id() {
    return this.form.get('id');
  }
  get name() {
    return this.form.get('name');
  }
  get projectImage() {
    return this.form.get('projectImage');
  }
  get projectName() {
    return this.form.get('projectName');
  }
}
