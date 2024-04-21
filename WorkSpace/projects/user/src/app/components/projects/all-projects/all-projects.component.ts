import { Component, OnInit } from '@angular/core';
import { IProjectRead } from '../../../models/Project/iproject-read';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { ProjectService } from '../../../services/projects/project.service';
import { CompanyService } from '../../../services/companies/company.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddProjectComponent } from '../add-project/add-project.component';
import { UpdateProjectComponent } from '../update-project/update-project.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { DeleteProjectComponent } from '../delete-project/delete-project.component';
import { IProjectDetails } from '../../../models/Project/iproject-details';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})

export class AllProjectsComponent implements OnInit {
  projects: IProjectRead[] = [];
  companies: ICompanyRead[] = [];
  projectDetails!: IProjectDetails;

  constructor(
    private projectService: ProjectService,
    private companyService: CompanyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllCompanies();
  }

  FilterProjects(companyId: any) {
    if (companyId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByCompanyId(companyId.value);
    }
  }

  GetAllByCompanyId(companyId: number) {
    this.projectService.GetAllByCompanyId(companyId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.projects = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }
  GetAllCompanies() {
    this.companyService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.companies = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAll() {
    this.projectService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.projects = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddProjectComponent , {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(project: IProjectRead) {
    this.projectService.GetDetails(project.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.projectDetails = response.data;
        this.GetDetails(this.projectDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(project: IProjectDetails) {
    const dialogRef = this.dialog.open(UpdateProjectComponent, {
      width: '750px',
      data: project,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Details(project: IProjectRead) {
    const dialogRef = this.dialog.open(ProjectDetailsComponent, {
      width: '750px',
      data: project,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(projectId: number) {
    const dialogRef = this.dialog.open(DeleteProjectComponent, {
      width: '750px',
      data: projectId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
