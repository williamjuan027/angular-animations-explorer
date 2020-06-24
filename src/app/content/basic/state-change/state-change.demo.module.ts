import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateChangeDemoComponent } from './state-change.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [StateChangeDemoComponent],
  exports: [StateChangeDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule],
})
export class StateChangeDemoModule {
  static entry = StateChangeDemoComponent;
}
