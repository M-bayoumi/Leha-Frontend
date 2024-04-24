import { Component, OnInit } from '@angular/core';
import { IProjectPhaseRead } from '../../../models/ProjectPhase/iproject-phase-read';
import { IProjectRead } from '../../../models/Project/iproject-read';
import { IPhaseItemRead } from '../../../models/PhaseItem/iphase-item-read';
import { IPhaseItemDetails } from '../../../models/PhaseItem/iphase-item-details';
import { ProjectService } from '../../../services/projects/project.service';
import { ProjectPhaseService } from '../../../services/projectPhases/project-phase.service';
import { PhaseItemService } from '../../../services/phaseItems/phase-item.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddPhaseItemComponent } from '../add-phase-item/add-phase-item.component';
import { UpdatePhaseItemComponent } from '../update-phase-item/update-phase-item.component';
import { PhaseItemDetailsComponent } from '../phase-item-details/phase-item-details.component';
import { DeletePhaseItemComponent } from '../delete-phase-item/delete-phase-item.component';

@Component({
  selector: 'app-all-phase-items',
  templateUrl: './all-phase-items.component.html',
  styleUrls: ['./all-phase-items.component.scss'],
})
export class AllPhaseItemsComponent implements OnInit {
  projects: IProjectRead[] = [];
  projectPhases: IProjectPhaseRead[] = [];
  phaseItems: IPhaseItemRead[] = [];
  phaseItemDetails!: IPhaseItemDetails;

  constructor(
    private projectService: ProjectService,
    private projectPhaseService: ProjectPhaseService,
    private phaseItemService: PhaseItemService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllProjects();
    this.GetAllProjectPhases();
  }

  FilterProjectPhases(projectId: any) {
    if (projectId.value == 0) {
      this.GetAllProjectPhases();
    } else {
      this.GetAllProjectPhasesByProjectId(projectId.value);
    }
  }

  FilterPhaseItems(projectPhaseId: any) {
    if (projectPhaseId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByProjectPhaseId(projectPhaseId.value);
    }
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

  GetAllProjectPhasesByProjectId(projectId: number) {
    this.projectPhaseService.GetAllByProjectId(projectId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.projectPhases = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAll() {
    this.phaseItemService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.phaseItems = response.data;
        console.log(response);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAllByProjectPhaseId(projectPhaseId: number) {
    this.phaseItemService.GetAllByProjectPhaseId(projectPhaseId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.phaseItems = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddPhaseItemComponent, {
      width: '750px',
      height: '1200px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(phaseItem: IPhaseItemRead) {
    this.phaseItemService.GetDetails(phaseItem.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.phaseItemDetails = response.data;
        this.GetDetails(this.phaseItemDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(phaseItem: IPhaseItemDetails) {
    const dialogRef = this.dialog.open(UpdatePhaseItemComponent, {
      width: '750px',
      height: '1200px',
      data: phaseItem,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Details(phaseItem: IPhaseItemRead) {
    const dialogRef = this.dialog.open(PhaseItemDetailsComponent, {
      width: '750px',
      height: '1200px',
      data: phaseItem,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(phaseItemId: number) {
    const dialogRef = this.dialog.open(DeletePhaseItemComponent, {
      width: '750px',
      data: phaseItemId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
