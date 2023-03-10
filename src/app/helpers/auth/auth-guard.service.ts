import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OauthService } from './oauth.service';
import { CoreNavigationEnum } from '../../models/enums/navigation-enums/core-navigation-enum';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private oauth: OauthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.oauth.isAuthenticated()) {
      return true;
    }
    this.router.navigate([CoreNavigationEnum.LOGIN]);
    return false;
  }
}
