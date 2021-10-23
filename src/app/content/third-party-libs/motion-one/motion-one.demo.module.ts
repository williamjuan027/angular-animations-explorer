import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';
import { ContainersModule } from '@shared/components/containers';
import { MotionOneDemoComponent } from './motion-one.demo.component';

@NgModule({
  declarations: [MotionOneDemoComponent],
  exports: [MotionOneDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ContainersModule,
    ButtonsModule,
  ],
})
export class MotionOneDemoModule {
  static entry = MotionOneDemoComponent;
}
