import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { ContainerModule } from '@shared/components/container';
import { DemoContentDirective } from './directives/demo-content.directive';
import { TwoColumnModule } from '@shared/components/layout';

@NgModule({
  declarations: [PostComponent, DemoContentDirective],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    PostRoutingModule,
    ContainerModule,
    TwoColumnModule,
  ],
})
export class PostModule {}
