import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProjectPhaseRead } from '../../../models/ProjectPhase/iproject-phase-read';
import { PhaseItemService } from '../../../services/phaseItems/phase-item.service';
import { ProjectPhaseService } from '../../../services/projectPhases/project-phase.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPhaseItemDetails } from '../../../models/PhaseItem/iphase-item-details';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-update-phase-item',
  templateUrl: './update-phase-item.component.html',
  styleUrls: ['./update-phase-item.component.scss']
})

export class UpdatePhaseItemComponent {
  form: FormGroup;
  projectPhases: IProjectPhaseRead[] = [];

  constructor(
    private fb: FormBuilder,
    private phaseItemService: PhaseItemService,
    private projectPhaseService: ProjectPhaseService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdatePhaseItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPhaseItemDetails
  ) {
    this.form = this.fb.group({
      Id: [data?.id || 0, [Validators.required]],
      number: [data?.number ||'', [Validators.required]],
      nameAr: [data?.nameAr || '' , [Validators.required]],
      nameEn: [data?.nameEn || '', [Validators.required]],
      acumulativePercentage: [data?.acumulativePercentage || 0 , [Validators.required]],
      progressPercentage: [data?.progressPercentage || 0, [Validators.required]],
      executionProgressAr: [data?.executionProgressAr || '', [Validators.required]],
      executionProgressEn: [data?.executionProgressEn || '', [Validators.required]],
      rFIAr: [data?.rfiAr || '', [Validators.required]],
      rFIEn: [data?.rfiEn ||'', [Validators.required]],
      wIRAr: [data?.wirAr || '', [Validators.required]],
      wIREn: [data?.wirEn || '', [Validators.required]],
      scheduleAr: [data?.scheduleAr || '', [Validators.required]],
      scheduleEn: [data?.scheduleEn || '', [Validators.required]],
      unitAr: [data?.unitAr || '', [Validators.required]],
      unitEn: [data?.unitEn || '', [Validators.required]],
      initialInventoryQuantities: [data?.initialInventoryQuantities || 0, [Validators.required]],
      actualInventoryQuantities: [data?.actualInventoryQuantities || 0, [Validators.required]],
      projectPhaseId: [data?.projectPhaseId || 0, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllProjectPhases();
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

  Update() {
    let formData = new FormData();
    formData.append('Id', this.Id?.value);
    formData.append('number', this.number?.value);
    formData.append('nameAr', this.nameAr?.value);
    formData.append('nameEn', this.nameEn?.value);
    formData.append('acumulativePercentage', this.acumulativePercentage?.value);
    formData.append('progressPercentage', this.progressPercentage?.value);
    formData.append('executionProgressAr', this.executionProgressAr?.value);
    formData.append('executionProgressEn', this.executionProgressEn?.value);
    formData.append('rFIAr', this.rFIAr?.value);
    formData.append('rFIEn', this.rFIEn?.value);
    formData.append('wIRAr', this.wIRAr?.value);
    formData.append('wIREn', this.wIREn?.value);
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


    this.phaseItemService.Update(formData).subscribe({
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
  get rFIAr() {
    return this.form.get('rFIAr');
  }
  get rFIEn() {
    return this.form.get('rFIEn');
  }
  get wIRAr() {
    return this.form.get('wIRAr');
  }
  get wIREn() {
    return this.form.get('wIREn');
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

  get role(): any {
    return localStorage.getItem('role');
  }
}
