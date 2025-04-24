import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { SigninService } from './signin/signin.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authservice: SigninService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = this.authservice.isAuthenticated();

    if (logged) {
      this.router.navigate(['/article']);
      return true;
    }
    this.router.navigate(['/signin']);
    alert('You must login to the system to access the page.!');
    return false;
  }
}