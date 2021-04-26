import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';
import { ContainersModule } from '@shared/components/containers';
import { StateChangePopmotionDemoDirective } from './state-change-popmotion-demo.directive';
import { StateChangeDemoComponent } from './state-change.demo.component';

@NgModule({
  declarations: [StateChangeDemoComponent, StateChangePopmotionDemoDirective],
  exports: [StateChangeDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class StateChangeDemoModule {
  static entry = StateChangeDemoComponent;
}
