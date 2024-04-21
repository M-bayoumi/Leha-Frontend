import { Component, OnInit } from '@angular/core';
import { IPostRead } from '../../../models/Post/ipost-read';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { PostService } from '../../../services/posts/post.service';
import { CompanyService } from '../../../services/companies/company.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddPostComponent } from '../add-post/add-post.component';
import { UpdatePostComponent } from '../update-post/update-post.component';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { DeletePostComponent } from '../delete-post/delete-post.component';
import { IPostDetails } from '../../../models/Post/ipost-details';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})

export class AllPostsComponent implements OnInit {
  posts: IPostRead[] = [];
  companies: ICompanyRead[] = [];
  postDetails!: IPostDetails;

  constructor(
    private postService: PostService,
    private companyService: CompanyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllCompanies();
  }

  FilterPosts(companyId: any) {
    if (companyId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByCompanyId(companyId.value);
    }
  }

  GetAllByCompanyId(companyId: number) {
    this.postService.GetAllByCompanyId(companyId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.posts = response.data;
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
    this.postService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.posts = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddPostComponent , {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(post: IPostRead) {
    this.postService.GetDetails(post.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.postDetails = response.data;
        this.GetDetails(this.postDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(post: IPostDetails) {
    const dialogRef = this.dialog.open(UpdatePostComponent, {
      width: '750px',
      data: post,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
  Details(post: IPostRead) {
    const dialogRef = this.dialog.open(PostDetailsComponent, {
      width: '750px',
      data: post,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(postId: number) {
    const dialogRef = this.dialog.open(DeletePostComponent, {
      width: '750px',
      data: postId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
