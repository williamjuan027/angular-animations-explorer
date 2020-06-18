import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { ContainerModule } from '@shared/components/container';
import { DemoContentDirective } from './directives/demo-content.directive';
import { TwoColumnModule } from '@shared/components/layout';
import { ContentLoaderService } from './content/content-loader.service';
import { CONTENT_WIDGETS } from './content/content-tokens';
import { widgetArrayToObj } from './content/content-widgets';

@NgModule({
  declarations: [PostComponent, DemoContentDirective],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    PostRoutingModule,
    ContainerModule,
    TwoColumnModule,
  ],
  providers: [
    ContentLoaderService,
    { provide: CONTENT_WIDGETS, useFactory: widgetArrayToObj },
  ],

  // providers: [
  //   {
  //     provide: NgModuleFactoryLoader,
  //     useClass: SystemJsNgModuleLoader,
  //   },
  // ],
})
export class PostModule {}
