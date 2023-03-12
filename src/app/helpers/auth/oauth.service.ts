import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { CoreNavigationEnum } from '../../models/enums/navigation-enums/core-navigation-enum';

@Injectable({
  providedIn: 'root',
})
export class OauthService {
  private isLoginUser: boolean = false;

  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  public set isLogin(data: boolean) {
    this.isLoginUser = data;
  }

  public isAuthenticated(): boolean {
    return this.isLoginUser;
  }

  handleLogout() {
    this.isLogin = false;
    this.localStorageService.clearLocalStorage();
    this.router.navigate([CoreNavigationEnum.LOGIN]);
  }
}
