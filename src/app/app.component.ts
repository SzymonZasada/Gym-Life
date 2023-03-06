import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs';
import { OauthService } from './helpers/auth/oauth.service';
import { CoreNavigationEnum } from './models/enums/navigation-enums/core-navigation-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private oauth: OauthService) {
    this.router.events
      .pipe(
        filter((event: RoutesRecognized) => event instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: RoutesRecognized[]) => {
        const previousUrl = events[0].urlAfterRedirects;
        const currentUrl = events[1].urlAfterRedirects;
        const isUserAuthenticated = this.oauth.isAuthenticated();

        if (isUserAuthenticated && currentUrl === CoreNavigationEnum.LOGIN) {
          if (previousUrl === CoreNavigationEnum.LOGIN) {
            this.router.navigate([CoreNavigationEnum.HOME]);
          }
          if (previousUrl !== CoreNavigationEnum.LOGIN) {
            this.router.navigate([previousUrl]);
          }
        }

        if (!isUserAuthenticated && currentUrl !== CoreNavigationEnum.LOGIN) {
          this.router.navigate([CoreNavigationEnum.LOGIN]);
        }
      });
  }
}
