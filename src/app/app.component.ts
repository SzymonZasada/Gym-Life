import { ChangeDetectorRef, Component, EventEmitter, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { OauthService } from './helpers/auth/oauth.service';
import { UserNavigationInterface } from './models/interfaces/navigation-interfaces/navigation-interface';
import { CoreNavigationEnum } from './models/enums/navigation-enums/core-navigation-enum';

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

  fillerNav: UserNavigationInterface[] = [
    { title: 'Home', navigation: CoreNavigationEnum.HOME },
    { title: 'Training', navigation: CoreNavigationEnum.TRAINING },
    { title: 'Calories', navigation: CoreNavigationEnum.CALORIES },
    { title: 'Calculators', navigation: CoreNavigationEnum.CALCULATORS },
    { title: 'Settings', navigation: CoreNavigationEnum.SETTINGS },
  ];
}
