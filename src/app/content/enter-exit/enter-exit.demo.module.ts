import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterExitDemoComponent } from './enter-exit.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';

@NgModule({
  declarations: [EnterExitDemoComponent],
  exports: [EnterExitDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class EnterExitDemoModule {
  static entry = EnterExitDemoComponent;
}
