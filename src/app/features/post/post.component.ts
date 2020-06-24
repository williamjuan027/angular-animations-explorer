import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoContentDirective } from './directives/demo-content.directive';
import { ContentLoaderService } from '@content/content-loader.service';
import { NavigationService } from '@core/services';
import { contentRoutes } from '@content/content-routes';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @ViewChild(DemoContentDirective, { static: true })
  demoContent: DemoContentDirective;

  mdPost: string; // path to md file
  postInfo;

  constructor(
    private route: ActivatedRoute,
    private navigaitonService: NavigationService,
    private contentLoaderService: ContentLoaderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.loadDemoContent(params.get('category'), params.get('postName'));
    });
  }

  private loadDemoContent(category: string, postName: string) {
    try {
      this.postInfo = this.contentLoaderService.getPostInfo(category, postName);

      // load markdown
      this.mdPost = this.postInfo.post;

      // load demo component
      this.contentLoaderService.load(
        category,
        postName,
        this.demoContent.viewContainerRef
      );
    } catch (e) {
      this.navigaitonService.navigateToHome();
      return;
    }
  }
}
