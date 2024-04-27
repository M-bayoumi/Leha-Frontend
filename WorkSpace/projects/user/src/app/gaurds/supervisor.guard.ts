import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // or 'any' other module where you want to provide the guard
})
export class supervisorGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      localStorage.getItem('role') === 'Supervisor' ||
      localStorage.getItem('role') === 'Admin' ||
      localStorage.getItem('role') === 'SuperAdmin'
    ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

