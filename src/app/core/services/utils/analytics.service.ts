import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// declare gtag as a function to set and sent the events
declare let gtag;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private router: Router) {
    // configure gtag
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://www.googletagmanager.com/gtag/js?id=' + environment.gtagId;
    document.head.prepend(script);
  }

  trackPageViews(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        gtag('config', environment.gtagId, {
          page_path: event.urlAfterRedirects,
        });
      });
  }
}
