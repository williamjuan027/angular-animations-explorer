import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonBasicComponent } from './button-basic/button-basic.component';

const COMPONENTS = [ButtonBasicComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MatButtonModule],
  exports: [...COMPONENTS],
})
export class ButtonsModule {}
