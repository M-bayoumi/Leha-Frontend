import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  lang: any = 'en';
  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private translate: TranslateService
  ) {
    if ('lang' in localStorage) {
      this.lang = localStorage.getItem('lang');

    }else{

      this.lang = this.translate.currentLang;
    }
    this._activatedRoute.paramMap.subscribe((params) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {}

  LogOut() {
    this.router.navigate(['/login']);
    // this.user = {} as IUser;
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
  changeLanguage() {
    if (this.lang == 'en') {
      localStorage.setItem('lang', 'ar');
    } else {
      localStorage.setItem('lang', 'en');
    }
    window.location.reload();
  }
  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  get isAdmin(): boolean {
    return localStorage.getItem('role') == 'Admin';
  }
}
