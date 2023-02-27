import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormRegisterEnum } from '../../../../models/enums/login-module-enums/login-enums';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterUserComponent implements OnInit {
  public FormRegisterEnum: typeof FormRegisterEnum = FormRegisterEnum;
  public formRegister: FormGroup;

  ngOnInit() {
    this.formRegister = new FormGroup({
      [FormRegisterEnum.LOGIN]: new FormControl('', [Validators.required, Validators.minLength(5)]),
      [FormRegisterEnum.EMAIL]: new FormControl('', [Validators.required, Validators.email]),
      [FormRegisterEnum.PASSWORD]: new FormControl('', [Validators.required]),
      [FormRegisterEnum.REPEAT]: new FormControl('', [Validators.required]),
    });
  }

  isFormValid() {
    const valid = this.formRegister.valid;
    return !valid;
  }

  registerLogin() {
    let reqObject: Record<string, string> = {};
    Object.entries(this.formRegister.controls).forEach(([key, value]) => {
      reqObject[key] = value.value;
    });

    console.log(reqObject);
  }
}
