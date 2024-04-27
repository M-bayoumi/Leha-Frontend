import { Component, OnInit } from '@angular/core';
import { IProductRead } from '../../models/Product/iproduct-read';
import { IServiceRead } from '../../models/Service/iservice-read';
import { IClientRead } from '../../models/Client/iclient-read';
import { IResponse } from '../../models/iresponse';
import { IHomeImageRead } from '../../models/HomeImage/ihome-image-read';
import { IPostRead } from '../../models/Post/ipost-read';
import { IProjectRead } from '../../models/Project/iproject-read';
import { HomeImageService } from '../../services/homeImages/home-image.service';
import { ProductService } from '../../services/products/product.service';
import { ServiceService } from '../../services/services/service.service';
import { ClientService } from '../../services/clients/client.service';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/posts/post.service';
import { ProjectService } from '../../services/projects/project.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-companies-details',
  templateUrl: './companies-details.component.html',
  styleUrls: ['./companies-details.component.scss'],
})
export class CompaniesDetailsComponent implements OnInit {
  companyId: number = 0;
  homeImages: IHomeImageRead[] = [];
  products: IProductRead[] = [];
  services: IServiceRead[] = [];
  clients: IClientRead[] = [];
  posts: IPostRead[] = [];
  projects: IProjectRead[] = [];
  response: IResponse = {} as IResponse;
  currentIndex: number = 0;
  intervalSubscription: Subscription | undefined;

  constructor(
    private homeImageService: HomeImageService,
    private productService: ProductService,
    private serviceService: ServiceService,
    private clientService: ClientService,
    private postService: PostService,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.companyId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.GetAllHomeImages(this.companyId);
    this.GetAllProducts(this.companyId);
    this.GetAllClients(this.companyId);
    this.GetAllServices(this.companyId);
    this.GetAllPosts(this.companyId);
    this.GetAllProjects(this.companyId);
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

  startInterval() {
    this.intervalSubscription = interval(2000).subscribe(() => {
      this.nextSlide();
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

  GetAllHomeImages(id: number) {
    this.homeImageService.GetAllByCompanyId(id).subscribe({
      next: (v) => {
        this.response = v as IResponse;
        this.homeImages = this.response.data;
        console.log(this.response);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAllProducts(id: number) {
    this.productService.GetAllByCompanyId(id).subscribe({
      next: (v) => {
        this.response = v as IResponse;
        this.products = this.response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAllClients(id: number) {
    this.clientService.GetAllByCompanyId(id).subscribe({
      next: (v) => {
        this.response = v as IResponse;
        this.clients = this.response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAllServices(id: number) {
    this.serviceService.GetAllByCompanyId(id).subscribe({
      next: (v) => {
        this.response = v as IResponse;
        this.services = this.response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAllPosts(id: number) {
    this.postService.GetAllByCompanyId(id).subscribe({
      next: (v) => {
        this.response = v as IResponse;
        this.posts = this.response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAllProjects(id: number) {
    this.projectService.GetAllByCompanyId(id).subscribe({
      next: (v) => {
        this.response = v as IResponse;
        this.projects = this.response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }
  get lang(): any {
    return localStorage.getItem('lang');
  }
}
