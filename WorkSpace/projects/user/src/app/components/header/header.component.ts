import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // user: IUser = {} as IUser;

  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
  }



  LogOut() {
    this.router.navigate(['/login']);
    // this.user = {} as IUser;
    localStorage.removeItem('token');
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
