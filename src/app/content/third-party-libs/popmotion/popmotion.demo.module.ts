import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';
import { ContainersModule } from '@shared/components/containers';
import { StateChangePopmotionDemoDirective } from './popmotion-demo.directive';
import { PopmotionDemoComponent } from './popmotion.demo.component';

@NgModule({
  declarations: [PopmotionDemoComponent, StateChangePopmotionDemoDirective],
  exports: [PopmotionDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class PopmotionDemoModule {
  static entry = PopmotionDemoComponent;
}
