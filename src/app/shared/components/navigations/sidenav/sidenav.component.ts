import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { contentRoutes } from '@content/content-routes';
import { NavigationService } from '@core/services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  sidenavList = contentRoutes;

  constructor(private navigationService: NavigationService) {}

  open(): void {
    if (!this.sidenav.opened) {
      this.sidenav.open();
    }
  }

  close(): void {
    if (this.sidenav.opened) {
      this.sidenav.close();
    }
  }

  toggle(): void {
    this.sidenav.toggle();
  }

  navigateToPost(path: string): void {
    this.navigationService.navigateToPost(path);
  }
}
