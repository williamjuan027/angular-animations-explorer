import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SingleColumnModule } from '@shared/components/layouts';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MarkdownModule.forChild(),
    HomeRoutingModule,
    ContainersModule,
    SingleColumnModule,
  ],
})
export class HomeModule {}
