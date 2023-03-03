import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormRegisterEnum } from '../../models/enums/login-module-enums/login-enums';

export function validateStrengthPassword(control: FormControl): ValidationErrors | null {
  let value: string = control.value || '';

  if (!value) {
    return null;
  }

  let upperCaseCharacters = /[A-Z]+/g;
  if (upperCaseCharacters.test(value) === false) {
    return { passwordStrength: `One capital letter is required` };
  }

  let lowerCaseCharacters = /[a-z]+/g;
  if (lowerCaseCharacters.test(value) === false) {
    return { passwordStrength: `One lover case letter is required` };
  }

  let numberCharacters = /[0-9]+/g;
  if (numberCharacters.test(value) === false) {
    return { passwordStrength: `One number character is required,` };
  }

  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (specialCharacters.test(value) === false) {
    return { passwordStrength: `One special letter is required` };
  }

  let specialLength = 8;
  if (value.length < specialLength) {
    return { passwordStrength: `Minimum length is 8 characters` };
  }
  return null;
}

export function validateMatchPasswords(formGroup: FormGroup): ValidationErrors | null {
  const password = formGroup.get(FormRegisterEnum.PASSWORD);
  const confirmPassword = formGroup.get(FormRegisterEnum.REPEAT);

  if (password.pristine || confirmPassword.pristine) {
    return null;
  }

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ notEqual: true });
  }
  if (password.value === confirmPassword.value) {
    confirmPassword.setErrors(null);
  }

  return null;
}
