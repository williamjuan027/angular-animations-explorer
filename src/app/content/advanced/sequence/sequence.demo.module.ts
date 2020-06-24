import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SequenceDemoComponent } from './sequence.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';

@NgModule({
  declarations: [SequenceDemoComponent],
  exports: [SequenceDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class SequenceDemoModule {
  static entry = SequenceDemoComponent;
}
