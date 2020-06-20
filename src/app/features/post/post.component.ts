import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoContentDirective } from './directives/demo-content.directive';
import { ContentLoaderService } from '@content/content-loader.service';
import { NavigationService } from '@core/services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @ViewChild(DemoContentDirective, { static: true })
  demoContent: DemoContentDirective;

  mdPost: string; // path to md file

  constructor(
    private route: ActivatedRoute,
    private navigaitonService: NavigationService,
    private contentLoaderService: ContentLoaderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.loadDemoContent(params.get('postName'));
    });
  }

  private loadDemoContent(postName: string) {
    // load markdown
    this.mdPost = this.contentLoaderService.loadPostMD(postName);

    // load demo component
    this.contentLoaderService
      .load(postName, this.demoContent.viewContainerRef)
      .catch((e) => {
        console.log('e', e);
        // return to home
        this.navigaitonService.navigateToHome();
      });
  }
}
