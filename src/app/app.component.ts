import { Component, ViewChild } from '@angular/core';
import { SidenavComponent } from '@shared/components/navigations/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: SidenavComponent;
  constructor() {}

  onMenuClick(): void {
    this.sidenav.toggle();
  }

  // navigateToPost(path: string): void {
  //   this.navigationService.navigateToPost(path);
  // }
}
