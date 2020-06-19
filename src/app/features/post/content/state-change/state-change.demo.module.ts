import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateChangeDemoComponent } from './state-change.demo.component';
import { ContainerModule } from '@shared/components/container';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [StateChangeDemoComponent],
  exports: [StateChangeDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainerModule],
})
export class StateChangeDemoModule {
  static entry = StateChangeDemoComponent;
  constructor() {
    console.log('stateChangeDemoModuleConstructor');
  }
}
