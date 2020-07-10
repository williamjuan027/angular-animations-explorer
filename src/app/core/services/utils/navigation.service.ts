import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from './analytics.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(
    private router: Router,
    private analyticsService: AnalyticsService
  ) {
    this.analyticsService.trackPageViews();
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  navigateToPost(category: string, postName: string): void {
    this.router.navigate([`/post/${category}/${postName}`]);
  }
}
