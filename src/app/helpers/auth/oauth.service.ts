import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OauthService {
  private isLoginUser: boolean = false;

  constructor() {}

  public set isLogin(data: boolean) {
    this.isLoginUser = data;
  }

  public isAuthenticated(): boolean {
    return this.isLoginUser;
  }
}
