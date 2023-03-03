import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CoreNavigationEnum } from '../../models/enums/navigation-enums/core-navigation-enum';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private _router: Router) {}

  navigateToRoute(path: CoreNavigationEnum) {
    this._router.navigate([path]);
  }
}
