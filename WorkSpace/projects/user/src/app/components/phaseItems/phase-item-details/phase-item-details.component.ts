import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPhaseItemRead } from '../../../models/PhaseItem/iphase-item-read';

@Component({
  selector: 'app-phase-item-details',
  templateUrl: './phase-item-details.component.html',
  styleUrls: ['./phase-item-details.component.scss'],
})
export class PhaseItemDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<PhaseItemDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPhaseItemRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      number: [data?.number || ''],
      name: [data?.name || ''],
      acumulativePercentage: [data?.acumulativePercentage || 0],
      progressPercentage: [data?.progressPercentage || 0],
      executionProgress: [data?.executionProgress || ''],
      rFI: [data?.rfi || ''],
      wIR: [data?.wir || ''],
      schedule: [data?.schedule || ''],
      initialInventoryQuantities: [data?.initialInventoryQuantities || 0],
      actualInventoryQuantities: [data?.actualInventoryQuantities || 0],
      percentageLossOrExceed: [data?.percentageLossOrExceed || 0],
      projectPhaseName: [data?.projectPhaseName || ''],
    });
  }
  ngOnInit(): void {}

  get id() {
    return this.form.get('id');
  }
  get number() {
    return this.form.get('number');
  }
  get name() {
    return this.form.get('name');
  }
  get acumulativePercentage() {
    return this.form.get('acumulativePercentage');
  }
  get progressPercentage() {
    return this.form.get('progressPercentage');
  }
  get executionProgress() {
    return this.form.get('executionProgress');
  }
  get rFI() {
    return this.form.get('rFI');
  }
  get wIR() {
    return this.form.get('wIR');
  }
  get schedule() {
    return this.form.get('schedule');
  }
  get initialInventoryQuantities() {
    return this.form.get('initialInventoryQuantities');
  }
  get actualInventoryQuantities() {
    return this.form.get('actualInventoryQuantities');
  }
  get percentageLossOrExceed() {
    return this.form.get('percentageLossOrExceed');
  }
  get projectPhaseName() {
    return this.form.get('projectPhaseName');
  }
}

