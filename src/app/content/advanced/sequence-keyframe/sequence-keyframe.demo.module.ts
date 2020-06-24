import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SequenceKeyframeDemoComponent } from './sequence-keyframe.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';

@NgModule({
  declarations: [SequenceKeyframeDemoComponent],
  exports: [SequenceKeyframeDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class SequenceKeyframeDemoModule {
  static entry = SequenceKeyframeDemoComponent;
}
