import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassBasedDemoComponent } from './class-based.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';

@NgModule({
  declarations: [ClassBasedDemoComponent],
  exports: [ClassBasedDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class ClassBasedDemoModule {
  static entry = ClassBasedDemoComponent;
}
