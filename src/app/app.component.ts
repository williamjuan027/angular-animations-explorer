import { Component, ViewChild } from '@angular/core';
import { contentRoutes } from '@content/content-routes';
import { NavigationService } from '@core/services';
import { SidenavComponent } from '@shared/components/navigations/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: SidenavComponent;
  constructor(private navigationService: NavigationService) {}

  onMenuClick(): void {
    this.sidenav.toggle();
  }

  navigateToPost(path: string): void {
    this.navigationService.navigateToPost(path);
  }
}
