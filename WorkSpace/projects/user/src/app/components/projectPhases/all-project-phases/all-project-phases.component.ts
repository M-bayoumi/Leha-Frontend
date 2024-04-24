import { Component, OnInit } from '@angular/core';
import { IProjectPhaseRead } from '../../../models/ProjectPhase/iproject-phase-read';
import { IProjectRead } from '../../../models/Project/iproject-read';
import { IProjectPhaseDetails } from '../../../models/ProjectPhase/iproject-phase-details';
import { ProjectPhaseService } from '../../../services/projectPhases/project-phase.service';
import { ProjectService } from '../../../services/projects/project.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddProjectPhaseComponent } from '../add-project-phase/add-project-phase.component';
import { UpdateProjectPhaseComponent } from '../update-project-phase/update-project-phase.component';
import { ProjectPhaseDetailsComponent } from '../project-phase-details/project-phase-details.component';
import { DeleteProjectPhaseComponent } from '../delete-project-phase/delete-project-phase.component';

@Component({
  selector: 'app-all-project-phases',
  templateUrl: './all-project-phases.component.html',
  styleUrls: ['./all-project-phases.component.scss'],
})
export class AllProjectPhasesComponent implements OnInit {
  phases: IProjectPhaseRead[] = [];
  projects: IProjectRead[] = [];
  projectPhaseDetails!: IProjectPhaseDetails;

  constructor(
    private projectPhaseService: ProjectPhaseService,
    private projectService: ProjectService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllProjects();
  }

  FilterProjectPhases(projectId: any) {
    if (projectId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByProjectId(projectId.value);
    }
  }

  GetAllByProjectId(projectId: number) {
    this.projectPhaseService.GetAllByProjectId(projectId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.phases = response.data;
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

  GetAll() {
    this.projectPhaseService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.phases = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddProjectPhaseComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(phase: IProjectPhaseRead) {
    this.projectPhaseService.GetDetails(phase.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.projectPhaseDetails = response.data;
        this.GetDetails(this.projectPhaseDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(phase: IProjectPhaseDetails) {
    const dialogRef = this.dialog.open(UpdateProjectPhaseComponent, {
      width: '750px',
      data: phase,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Details(phase: IProjectPhaseRead) {
    const dialogRef = this.dialog.open(ProjectPhaseDetailsComponent, {
      width: '750px',
      data: phase,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(phaseId: number) {
    const dialogRef = this.dialog.open(DeleteProjectPhaseComponent, {
      width: '750px',
      data: phaseId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
