import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() isMobileView: boolean;
  @Output() newSidenavEvent = new EventEmitter<EventEmitter<null>>();

  constructor() {}

  toggleSidenav(): void {
    this.newSidenavEvent.emit(null);
  }
}
