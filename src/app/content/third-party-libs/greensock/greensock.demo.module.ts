import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';
import { ContainersModule } from '@shared/components/containers';
import { GreensockDemoComponent } from './greensock.demo.component';
import { COMPONENTS } from './components';

@NgModule({
  declarations: [GreensockDemoComponent, ...COMPONENTS],
  exports: [GreensockDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ContainersModule,
    ButtonsModule,
  ],
})
export class GreensockDemoModule {
  static entry = GreensockDemoComponent;
}
