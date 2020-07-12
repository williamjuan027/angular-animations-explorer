import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveDemoComponent } from './attribute-directive.demo.component';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsModule } from '@shared/components/buttons';
import { FadeMouseDownDirective } from './fade-mouse-down.directive';

@NgModule({
  declarations: [AttributeDirectiveDemoComponent, FadeMouseDownDirective],
  exports: [AttributeDirectiveDemoComponent],
  imports: [CommonModule, FlexLayoutModule, ContainersModule, ButtonsModule],
})
export class AttributeDirectiveDemoModule {
  static entry = AttributeDirectiveDemoComponent;
}
