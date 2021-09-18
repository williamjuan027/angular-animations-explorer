import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';
import { ContainersModule } from '@shared/components/containers';
import { AnimateStyleDemoComponent } from './animate-style.demo.component';

@NgModule({
  declarations: [AnimateStyleDemoComponent],
  exports: [AnimateStyleDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ContainersModule,
    ButtonsModule,
  ],
})
export class AnimateStyleDemoModule {
  static entry = AnimateStyleDemoComponent;
}
