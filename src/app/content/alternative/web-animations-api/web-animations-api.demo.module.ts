import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAnimationsApiDemoComponent } from './web-animations-api.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';

@NgModule({
  declarations: [WebAnimationsApiDemoComponent],
  exports: [WebAnimationsApiDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class WebAnimationsApiDemoModule {
  static entry = WebAnimationsApiDemoComponent;
}
