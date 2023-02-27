import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActiveContentEnum } from '../../../models/enums/login-module-enums/login-enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public ActiveContentEnum: typeof ActiveContentEnum = ActiveContentEnum;

  public showContent: ActiveContentEnum = ActiveContentEnum.LOGIN;

  constructor(private detect: ChangeDetectorRef) {}

  ngOnInit() {}

  activeContent(active: ActiveContentEnum) {
    this.showContent = active;
    this.detect.detectChanges();
  }
}
