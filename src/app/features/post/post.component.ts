import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content, ContentLoaderService, EPageType } from '@app/core';
import { ClipboardButtonComponent, SingleColumnComponent, TwoColumnComponent } from '@app/shared';
import { MarkdownModule } from 'ngx-markdown';
import { DemoContentDirective } from './directives/demo-content.directive';

@Component({
    imports: [CommonModule, MarkdownModule, SingleColumnComponent, TwoColumnComponent, DemoContentDirective],
    providers: [ContentLoaderService],
    selector: 'app-post',
    templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  ePageType = EPageType; // determine which layout to use on template
  mdPost = signal<string | undefined>(undefined) // path to md file
  postInfo: Content | undefined = undefined;
  clipboardButtonComponent = ClipboardButtonComponent

  selectedVariantIndex = signal(0);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private contentLoaderService = inject(ContentLoaderService);

  private routeInfo: {
    category: string;
    postName: string;
  } | undefined = undefined;
  private demoVcRef: ViewContainerRef | undefined = undefined;

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

  selectVariant(index: number): void {
    if (!this.postInfo?.variants || !this.demoVcRef) {
      return;
    }
    this.mdPost.set(this.postInfo.variants[index].post)
    this.contentLoaderService.loadDemoComponent(
      this.postInfo.variants[index].demoComponent,
      this.demoVcRef
    );
    this.selectedVariantIndex.set(index)
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
        this.mdPost.set(this.postInfo.post);
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
        this.postInfo.demoComponent,
        vcRef
      );
    }
  }
}
