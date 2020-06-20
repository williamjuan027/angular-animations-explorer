import { Component } from '@angular/core';
import { NavigationService } from '@core/services';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private navigationService: NavigationService) {}
  navigateToHome(): void {
    this.navigationService.navigateToHome();
  }
}
