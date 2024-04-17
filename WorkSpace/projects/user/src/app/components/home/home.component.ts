import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  LogOut() {
    this.router.navigate(['/login']);
    // this.user = {} as IUser;
    localStorage.removeItem('token');
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
