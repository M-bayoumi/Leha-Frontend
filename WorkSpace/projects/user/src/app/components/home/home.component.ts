import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeImageService } from '../../services/homeImages/home-image.service';
import { IResponse } from '../../models/iresponse';
import { ISlider } from '../../models/Shared/islider';
import { BoardMemberService } from '../../services/boardMembers/board-member.service';
import { IBoardMemberRead } from '../../models/BoardMember/iboard-member-read';
import { BoardMemberSpeechService } from '../../services/boardMemberSpeechs/board-member-speech.service';
import { IBoardMemberSpeechRead } from '../../models/BoardMemberSpeech/iboard-member-speech-read';
import { PostService } from '../../services/posts/post.service';
import { IPostRead } from '../../models/Post/ipost-read';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, style, animate } from '@angular/animations';
import { CompanyService } from '../../services/companies/company.service';
import { ICompanyRead } from '../../models/Company/icompany-read';
import { IHomeImageRead } from '../../models/HomeImage/ihome-image-read';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  members: IBoardMemberRead[] = [];
  speeches: IBoardMemberSpeechRead[] = [];
  posts: IPostRead[] = [];
  companies: ICompanyRead[] = [];
  currentIndex: number = 0;
  intervalSubscription: Subscription | undefined;

  currentPost: number = 0;
  homeImages: IHomeImageRead[] = [];

  constructor(
    private router: Router,
    private boardMemberService: BoardMemberService,
    private boardMemberSpeechService: BoardMemberSpeechService,
    private postService: PostService,
    private companyService: CompanyService,
    private homeImageService: HomeImageService
  ) {}

  ngOnInit(): void {
    this.GetAllHomeImages();
    this.GetAllMembers();
    this.GetAllSpeeches();
    this.GetAllPosts();
    this.GetAllCompanies();
    this.startInterval();
  }
  ngOnDestroy(): void {
    this.stopInterval();
  }

  startInterval() {
    this.intervalSubscription = interval(2000).subscribe(() => {
      this.nextSlide();
      this.nextPost();
    });
  }

  stopInterval() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex === 0
        ? this.homeImages.length - 1
        : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex === this.homeImages.length - 1
        ? 0
        : this.currentIndex + 1;
  }

  prevPost() {
    this.currentPost =
      this.currentPost === 0 ? this.posts.length - 1 : this.currentPost - 1;
  }

  nextPost() {
    this.currentPost =
      this.currentPost === this.posts.length - 1 ? 0 : this.currentPost + 1;
  }

  GetAllHomeImages() {
    this.homeImageService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.homeImages = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAllMembers() {
    this.boardMemberService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.members = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAllSpeeches() {
    this.boardMemberSpeechService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.speeches = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }
  GetAllPosts() {
    this.postService.GetAll().subscribe({
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

  get lang(): any {
    return localStorage.getItem('lang');
  }
}
