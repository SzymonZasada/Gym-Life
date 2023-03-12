import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormLoginEnum } from '../../../../models/enums/login-module-enums/login-enums';
import { NavigationService } from '../../../../services/navigation/navigation.service';
import { CoreNavigationEnum } from '../../../../models/enums/navigation-enums/core-navigation-enum';
import { OauthService } from '../../../../helpers/auth/oauth.service';
import { AuthenticateService } from '../../../../services/login/authenticate.service';
import { LoginDataInterface } from '../../../../models/interfaces/login-interfaces/login-interfaces';
import { catchError, EMPTY } from 'rxjs';
import { LocalStorageService } from '../../../../services/local-storage/local-storage.service';
import { TokenEnums } from '../../../../models/enums/login-module-enums/token-enums';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginUserComponent implements OnInit {
  @Output() private isForgotPassword = new EventEmitter<boolean>();
  public FormLoginEnum: typeof FormLoginEnum = FormLoginEnum;
  public formLogin: FormGroup;

  constructor(
    private navigationService: NavigationService,
    private oAuthService: OauthService,
    private authenticateService: AuthenticateService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.formLogin = new FormGroup({
      [FormLoginEnum.LOGIN]: new FormControl('', [Validators.required, Validators.minLength(5)]),
      [FormLoginEnum.PASSWORD]: new FormControl('', [Validators.required]),
      [FormLoginEnum.REMEMBER]: new FormControl(false),
    });
  }

  isFormValid() {
    const valid = this.formLogin.valid;
    return !valid;
  }

  submitLogin() {
    let reqObject: Record<string, string | boolean> = {};
    Object.entries(this.formLogin.controls).forEach(([key, value]) => {
      reqObject[key] = value.value;
    });

    this.authenticateService
      .loginUser(reqObject as unknown as LoginDataInterface)
      .pipe(
        catchError(() => {
          this.oAuthService.isLogin = false;
          return EMPTY;
        })
      )
      .subscribe(el => {
        this.oAuthService.isLogin = true;
        this.localStorageService.setDataToLocalStorage(TokenEnums.TOKEN, el.token);
        this.localStorageService.setDataToLocalStorage(TokenEnums.REFRESH, el.refreshToken);
        this.navigationService.navigateToRoute(CoreNavigationEnum.HOME);
      });
  }

  forgotPassword() {
    this.isForgotPassword.emit(true);
  }
}
