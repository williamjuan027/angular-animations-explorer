import { Component, Output, EventEmitter } from '@angular/core';
import { NavigationService } from '@core/services';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() menuClick = new EventEmitter<void>();
  constructor(private navigationService: NavigationService) {}
  navigateToHome(): void {
    this.navigationService.navigateToHome();
  }

  toggleMenu(): void {
    this.menuClick.emit();
  }

  navigateToGithub(): void {
    this.navigationService.navigateToGithub();
  }
}
