import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from '@shared/components/navigations/sidenav';
import { RouterOutlet } from '@angular/router';
import { RouteFadeAnimation } from '@shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RouteFadeAnimation],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: SidenavComponent;
  constructor() {}

  onMenuClick(): void {
    this.sidenav.toggle();
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
