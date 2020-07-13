import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReuseDemoComponent } from './reuse.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';

@NgModule({
  declarations: [ReuseDemoComponent],
  exports: [ReuseDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class ReuseDemoModule {
  static entry = ReuseDemoComponent;
}
