import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProjectPhaseRead } from '../../../models/ProjectPhase/iproject-phase-read';
import { ProjectPhaseService } from '../../../services/projectPhases/project-phase.service';
import { PhaseItemService } from '../../../services/phaseItems/phase-item.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-add-phase-item',
  templateUrl: './add-phase-item.component.html',
  styleUrls: ['./add-phase-item.component.scss'],
})
export class AddPhaseItemComponent implements OnInit {
  form: FormGroup;
  projectPhases: IProjectPhaseRead[] = [];

  constructor(
    private fb: FormBuilder,
    private projectPhaseService: ProjectPhaseService,
    private phaseItemService: PhaseItemService,
    private dialog: MatDialogRef<AddPhaseItemComponent>,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      number: ['', [Validators.required]],
      nameAr: ['', [Validators.required]],
      nameEn: ['', [Validators.required]],
      acumulativePercentage: [0, [Validators.required]],
      progressPercentage: [0, [Validators.required]],
      executionProgressAr: ['', [Validators.required]],
      executionProgressEn: ['', [Validators.required]],
      rfiAr: ['', [Validators.required]],
      rfiEn: ['', [Validators.required]],
      wirAr: ['', [Validators.required]],
      wirEn: ['', [Validators.required]],
      scheduleAr: ['', [Validators.required]],
      scheduleEn: ['', [Validators.required]],
      unitAr: ['', [Validators.required]],
      unitEn: ['', [Validators.required]],
      initialInventoryQuantities: [0, [Validators.required]],
      actualInventoryQuantities: [0, [Validators.required]],
      projectPhaseId: [0, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllProjectPhases();
  }

  Add() {
    let formData = new FormData();
    formData.append('number', this.number?.value);
    formData.append('nameAr', this.nameAr?.value);
    formData.append('nameEn', this.nameEn?.value);
    formData.append('acumulativePercentage', this.acumulativePercentage?.value);
    formData.append('progressPercentage', this.progressPercentage?.value);
    formData.append('executionProgressAr', this.executionProgressAr?.value);
    formData.append('executionProgressEn', this.executionProgressEn?.value);
    formData.append('rfiAr', this.rfiAr?.value);
    formData.append('rfiEn', this.rfiEn?.value);
    formData.append('wirAr', this.wirAr?.value);
    formData.append('wirEn', this.wirEn?.value);
    formData.append('scheduleAr', this.scheduleAr?.value);
    formData.append('scheduleEn', this.scheduleEn?.value);
    formData.append('unitAr', this.unitAr?.value);
    formData.append('unitEn', this.unitEn?.value);
    formData.append(
      'initialInventoryQuantities',
      this.initialInventoryQuantities?.value
    );
    formData.append(
      'actualInventoryQuantities',
      this.actualInventoryQuantities?.value
    );
    formData.append('projectPhaseId', this.projectPhaseId?.value);

    this.phaseItemService.Add(formData).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.dialog.close(true);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }
  GetAllProjectPhases() {
    this.projectPhaseService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.projectPhases = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  get number() {
    return this.form.get('number');
  }
  get nameAr() {
    return this.form.get('nameAr');
  }
  get nameEn() {
    return this.form.get('nameEn');
  }
  get acumulativePercentage() {
    return this.form.get('acumulativePercentage');
  }
  get progressPercentage() {
    return this.form.get('progressPercentage');
  }
  get executionProgressAr() {
    return this.form.get('executionProgressAr');
  }
  get executionProgressEn() {
    return this.form.get('executionProgressEn');
  }
  get rfiAr() {
    return this.form.get('rfiAr');
  }
  get rfiEn() {
    return this.form.get('rfiEn');
  }
  get wirAr() {
    return this.form.get('wirAr');
  }
  get wirEn() {
    return this.form.get('wirEn');
  }
  get scheduleAr() {
    return this.form.get('scheduleAr');
  }
  get scheduleEn() {
    return this.form.get('scheduleEn');
  }
  get unitAr() {
    return this.form.get('unitAr');
  }
  get unitEn() {
    return this.form.get('unitEn');
  }
  get initialInventoryQuantities() {
    return this.form.get('initialInventoryQuantities');
  }
  get actualInventoryQuantities() {
    return this.form.get('actualInventoryQuantities');
  }
  get projectPhaseId() {
    return this.form.get('projectPhaseId');
  }
}
