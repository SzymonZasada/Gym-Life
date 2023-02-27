import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormLoginEnum } from '../../../../models/enums/login-module-enums/login-enums';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginUserComponent implements OnInit {
  public FormLoginEnum: typeof FormLoginEnum = FormLoginEnum;
  public formLogin: FormGroup;

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
    console.log(reqObject);
  }

  forgotPassword() {}
}
