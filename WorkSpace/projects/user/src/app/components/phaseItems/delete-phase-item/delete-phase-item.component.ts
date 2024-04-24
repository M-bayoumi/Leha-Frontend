import { Component, Inject, OnInit } from '@angular/core';
import { PhaseItemService } from '../../../services/phaseItems/phase-item.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-delete-phase-item',
  templateUrl: './delete-phase-item.component.html',
  styleUrls: ['./delete-phase-item.component.scss']
})

export class DeletePhaseItemComponent implements OnInit {
  constructor(
    private phaseItemService: PhaseItemService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<DeletePhaseItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  Delete() {
    this.phaseItemService.Delete(this.data).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.dialog.close(true);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }
}
