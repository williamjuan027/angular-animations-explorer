import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoContentDirective } from './directives/demo-content.directive';
import { ContentRouteConfig } from './content/content-route.config';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @ViewChild(DemoContentDirective, { static: true })
  demoContent: DemoContentDirective;

  mdPost;

  constructor(
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.loadDemoContent(params.get('postName'));
      console.log('params', params.get('postName'));
    });
  }

  private loadDemoContent(postName: string) {
    if (!ContentRouteConfig.hasOwnProperty(postName)) {
      // redirect to home
      return;
    }
    const currentPost = ContentRouteConfig[postName];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      currentPost.demo
    );
    this.mdPost = currentPost.post;
    const viewContainerRef = this.demoContent.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
