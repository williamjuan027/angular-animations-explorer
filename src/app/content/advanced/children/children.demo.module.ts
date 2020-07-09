import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenDemoComponent } from './children.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';

@NgModule({
  declarations: [ChildrenDemoComponent],
  exports: [ChildrenDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class ChildrenDemoModule {
  static entry = ChildrenDemoComponent;
}
