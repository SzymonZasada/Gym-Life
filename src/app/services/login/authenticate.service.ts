import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDataInterface, TokenResponseInterface } from '../../models/interfaces/login-interfaces/login-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private loginUrl = '/rest/auth/authenticate';
  private registerUrl = '/rest/auth/register';

  constructor(private httpClient: HttpClient) {}

  loginUser(loginData: LoginDataInterface): Observable<TokenResponseInterface> {
    return this.httpClient.post<TokenResponseInterface>(this.loginUrl, loginData, {
      responseType: 'json',
    });
  }

  registerUser(registerData: any) {
    return this.httpClient.post(this.registerUrl, registerData, {
      observe: 'response',
      responseType: 'json',
    });
  }
}
