import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('nav') nav: MatSidenav;

  private readonly _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  toggleSidebar(event: EventEmitter<null>) {
    this.nav.toggle();
  }

  isButtonActive() {
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
