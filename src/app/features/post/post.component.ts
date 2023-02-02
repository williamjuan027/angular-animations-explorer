import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content, ContentLoaderService, EPageType } from '@app/core';
import { ClipboardButtonComponent, SingleColumnComponent, TwoColumnComponent } from '@app/shared';
import { MarkdownModule } from 'ngx-markdown';
import { DemoContentDirective } from './directives/demo-content.directive';

@Component({
  standalone: true,
  imports: [CommonModule, MarkdownModule, SingleColumnComponent, TwoColumnComponent, ClipboardButtonComponent, DemoContentDirective],
  providers: [ContentLoaderService],
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  ePageType = EPageType; // determine which layout to use on template
  mdPost: string | undefined = undefined; // path to md file
  postInfo: Content | undefined = undefined;
  clipboardButtonComponent = ClipboardButtonComponent

  private routeInfo: {
    category: string;
    postName: string;
  } | undefined = undefined;
  private demoVcRef: ViewContainerRef | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentLoaderService: ContentLoaderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');
      const postName = params.get('postName');
      if (category != null && postName != null)
      this.setupPage(category, postName);
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

      if (this.postInfo != null) {
        // load markdown
        this.mdPost = this.postInfo.post;
      } else {
        this.router.navigate(['']);
      }

      if (this.demoVcRef) {
        // if navigating to a different route with the same component,
        // reuse exisiting loaded viewContainerRef to host demo component
        this.loadDemoComponent(this.demoVcRef);
      }
    } catch (e) {
      // this.navigationService.navigateToHome();
      return;
    }
  }

  private loadDemoComponent(vcRef: ViewContainerRef): void {
    if (this.postInfo != null) {
      this.contentLoaderService.loadDemoComponent(
        this.postInfo,
        vcRef
      );
    }
  }
}
