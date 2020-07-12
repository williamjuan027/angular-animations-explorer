import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineDemoComponent } from './inline.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';

@NgModule({
  declarations: [InlineDemoComponent],
  exports: [InlineDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class InlineDemoModule {
  static entry = InlineDemoComponent;
}
