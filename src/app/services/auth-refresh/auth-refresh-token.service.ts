import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { TokenEnums } from '../../models/enums/login-module-enums/token-enums';
import { RefreshTokenInterface } from '../../models/interfaces/login-interfaces/token-interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthRefreshTokenService {
  private refreshUrl = '/rest/refresh';

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {}

  refreshToken(): Observable<RefreshTokenInterface> {
    const currentRefreshToken = this.localStorageService.getDataFromLocalStorage(TokenEnums.REFRESH);
    return this.httpClient.post<RefreshTokenInterface>(
      this.refreshUrl,
      { refreshToken: currentRefreshToken },
      {
        observe: 'body',
        responseType: 'json',
      }
    );
  }
}
