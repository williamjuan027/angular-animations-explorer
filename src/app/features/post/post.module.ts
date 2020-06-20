import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { ContainersModule } from '@shared/components/containers';
import { DemoContentDirective } from './directives/demo-content.directive';
import { TwoColumnModule } from '@shared/components/layouts';
import { ContentLoaderService } from '@content/content-loader.service';
import { CONTENT_WIDGETS } from '@content/content-tokens';
import { widgetArrayToObj } from '@content/content-widgets';

@NgModule({
  declarations: [PostComponent, DemoContentDirective],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    PostRoutingModule,
    ContainersModule,
    TwoColumnModule,
  ],
  providers: [
    ContentLoaderService,
    { provide: CONTENT_WIDGETS, useFactory: widgetArrayToObj },
  ],
})
export class PostModule {}
