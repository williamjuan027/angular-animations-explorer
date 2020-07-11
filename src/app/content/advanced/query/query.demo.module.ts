import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryDemoComponent } from './query.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';

@NgModule({
  declarations: [QueryDemoComponent],
  exports: [QueryDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class QueryDemoModule {
  static entry = QueryDemoComponent;
}
