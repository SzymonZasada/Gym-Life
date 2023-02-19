import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OauthService {
  private isLogin: boolean = false;

  constructor() {}

  isAuthenticated(): boolean {
    return this.isLogin;
  }
}
