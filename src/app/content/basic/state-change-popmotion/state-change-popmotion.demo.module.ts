import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';
import { ContainersModule } from '@shared/components/containers';
import { StateChangePopmotionDemoDirective } from './state-change-popmotion-demo.directive';
import { StateChangePopmotionDemoComponent } from './state-change-popmotion.demo.component';

@NgModule({
  declarations: [
    StateChangePopmotionDemoComponent,
    StateChangePopmotionDemoDirective,
  ],
  exports: [StateChangePopmotionDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class StateChangePopmotionDemoModule {
  static entry = StateChangePopmotionDemoComponent;
}
