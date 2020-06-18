import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {}

  navigateToPost(): void {
    this.navigationService.navigateToPost('state-change');
  }
}
