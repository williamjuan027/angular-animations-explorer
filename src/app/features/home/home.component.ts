import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@core/services';
import { CardQuicklinkConfig } from '@shared/components/containers/card-quicklink';
import { contentRoutes } from '@content/content-routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  contents = contentRoutes;
  constructor(private navigationService: NavigationService) {}

  navigateToPost(category: string, post: string): void {
    this.navigationService.navigateToPost(category, post);
  }
}
