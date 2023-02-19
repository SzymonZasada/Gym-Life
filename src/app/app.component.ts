import { ChangeDetectorRef, Component, EventEmitter, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { OauthService } from './helpers/auth/oauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('nav') nav: MatSidenav;

  private readonly mobileQueryListener: () => void;
  public mobileQuery: MediaQueryList;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private mediaMatcher: MediaMatcher,
    private oauthService: OauthService
  ) {
    this.mobileQuery = mediaMatcher.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  userIsLogged(): boolean {
    return this.oauthService.isAuthenticated();
  }

  toggleSidebar(event: EventEmitter<null>): void {
    this.nav.toggle();
  }

  isButtonActive(): boolean {
    return this.mobileQuery.matches;
  }

  title = 'Gym-Life';

  fillerNav = [
    { title: 'Home', navigation: '/home' },
    { title: 'Training', navigation: '/training' },
    { title: 'Calories', navigation: '/calories' },
    { title: 'Calculators', navigation: '/calculators' },
    { title: 'Settings', navigation: '/settings' },
  ];
}
