import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { RegisterUserComponent } from './login/register-user/register-user.component';
import { MatCardModule } from '@angular/material/card';
import { LoginRoutingModule } from './login-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PasswordRemindUserComponent } from './login/password-remind-user/password-remind-user.component';

@NgModule({
  declarations: [LoginComponent, LoginUserComponent, RegisterUserComponent, PasswordRemindUserComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    LoginRoutingModule,
  ],
})
export class LoginModule {}
