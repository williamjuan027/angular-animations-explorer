import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateChangeDemoComponent } from './state-change.demo.component';

@NgModule({
  declarations: [StateChangeDemoComponent],
  exports: [StateChangeDemoComponent],
  imports: [CommonModule],
})
export class StateChangeDemoModule {
  static entry = StateChangeDemoComponent;
  constructor() {
    console.log('stateChangeDemoModuleConstructor');
  }
}
