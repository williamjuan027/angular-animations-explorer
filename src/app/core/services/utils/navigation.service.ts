import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { contentRoutes } from '@content/content-routes';
import { filter, map } from 'rxjs/operators';
import { AnalyticsService } from './analytics.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private analyticsService: AnalyticsService
  ) {
    this.analyticsService.trackPageViews();
    this._listenToRouterEvents();
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  navigateToPost(category: string, postName: string): void {
    this.router.navigate([`/post/${category}/${postName}`]);
  }

  navigateToGithub(): void {
    this._openLinkInNewTab(
      'https://github.com/williamjuan027/angular-animations-explorer'
    );
  }

  private _openLinkInNewTab(url: string): void {
    window.open(url, '_blank');
  }

  private _listenToRouterEvents(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((route: NavigationEnd) => {
          const urlParts = route.urlAfterRedirects
            .split('/')
            .filter((item) => !!item);
          if (urlParts?.length === 3) {
            return {
              category: urlParts[1],
              post: urlParts[2],
            };
          }
        })
      )
      .subscribe((res) => {
        if (res) {
          // this._updateMetaTags(res.category, res.post);
          const currentCategory = contentRoutes.find(
            (route) => route.path === res.category
          );
          const currentPost = currentCategory.routes.find(
            (route) => route.path === res.post
          );
          this._updateMetaTags(currentPost.title, currentPost.description);
        } else {
          this._updateMetaTags();
        }
      });
  }

  private _updateMetaTags(
    title: string = 'Angular Animations Explorer',
    description: string = 'A resource to showcase the different animations that you could do with Angular'
  ): void {
    this.title.setTitle(title);
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
  }
}
