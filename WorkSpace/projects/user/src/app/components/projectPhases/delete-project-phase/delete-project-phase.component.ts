import { Component, Inject, OnInit } from '@angular/core';
import { ProjectPhaseService } from '../../../services/projectPhases/project-phase.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-delete-project-phase',
  templateUrl: './delete-project-phase.component.html',
  styleUrls: ['./delete-project-phase.component.scss']
})

export class DeleteProjectPhaseComponent implements OnInit {
  constructor(
    private projectPhaseService: ProjectPhaseService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<DeleteProjectPhaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  Delete() {
    this.projectPhaseService.Delete(this.data).subscribe({
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
