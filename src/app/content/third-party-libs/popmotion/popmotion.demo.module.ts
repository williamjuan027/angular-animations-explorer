import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';
import { ContainersModule } from '@shared/components/containers';
import { StateChangePopmotionDemoDirective } from './popmotion-demo.directive';
import { PopmotionDemoComponent } from './popmotion.demo.component';

@NgModule({
  declarations: [PopmotionDemoComponent, StateChangePopmotionDemoDirective],
  exports: [PopmotionDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    FlexLayoutModule,
    ContainersModule,
    ButtonsModule,
  ],
})
export class PopmotionDemoModule {
  static entry = PopmotionDemoComponent;
}
