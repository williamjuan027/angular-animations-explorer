import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableDemoComponent } from './disable.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';

@NgModule({
  declarations: [DisableDemoComponent],
  exports: [DisableDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class DisableDemoModule {
  static entry = DisableDemoComponent;
}
