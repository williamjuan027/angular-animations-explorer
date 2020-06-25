import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentLoaderService } from '@content/content-loader.service';
import { NavigationService } from '@core/services';
import {
  EPageType,
  IContentCategoryRoutes,
} from '@content/content-routes.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  ePageType = EPageType; // determine which layout to use on template
  mdPost: string; // path to md file
  postInfo: IContentCategoryRoutes;

  private routeInfo: {
    category: string;
    postName: string;
  };
  private demoVcRef: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private contentLoaderService: ContentLoaderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.setupPage(params.get('category'), params.get('postName'));
    });
  }

  onComponentLoaded(vcRef: ViewContainerRef): void {
    this.loadDemoComponent(vcRef);
    this.demoVcRef = vcRef;
  }

  private setupPage(category: string, postName: string): void {
    this.routeInfo = {
      category,
      postName,
    };
    try {
      this.postInfo = this.contentLoaderService.getPostInfo(category, postName);

      // load markdown
      this.mdPost = this.postInfo.post;

      if (this.demoVcRef) {
        // if navigating to a different route with the same component,
        // reuse exisiting loaded viewContainerRef to host demo component
        this.loadDemoComponent(this.demoVcRef);
      }
    } catch (e) {
      this.navigationService.navigateToHome();
      return;
    }
  }

  private loadDemoComponent(vcRef: ViewContainerRef): void {
    this.contentLoaderService.load(
      this.routeInfo.category,
      this.routeInfo.postName,
      vcRef
    );
  }
}
