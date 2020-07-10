import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateChangeDemoComponent } from './state-change.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';

@NgModule({
  declarations: [StateChangeDemoComponent],
  exports: [StateChangeDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class StateChangeDemoModule {
  static entry = StateChangeDemoComponent;
}
