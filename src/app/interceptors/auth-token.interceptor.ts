import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, EMPTY, Observable, switchMap, throwError } from 'rxjs';
import { AuthRefreshTokenService } from '../services/auth-refresh/auth-refresh-token.service';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { TokenEnums } from '../models/enums/login-module-enums/token-enums';
import { OauthService } from '../helpers/auth/oauth.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private authRefreshTokenService: AuthRefreshTokenService,
    private localStorageService: LocalStorageService,
    private oauthService: OauthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.localStorageService.getDataFromLocalStorage(TokenEnums.TOKEN);
    if (token) {
      request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        }
        if (error instanceof HttpErrorResponse && error.status === 403) {
          return this.handle403Error();
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<unknown>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      return this.authRefreshTokenService.refreshToken().pipe(
        switchMap(el => {
          this.localStorageService.setDataToLocalStorage(TokenEnums.TOKEN, el.token);
          request = request.clone({ setHeaders: { Authorization: `Bearer ${el.token}` } });
          this.isRefreshing = false;
          return next.handle(request);
        })
      );
    }
    return next.handle(request);
  }

  private handle403Error() {
    this.oauthService.handleLogout();
    return EMPTY;
  }
}
