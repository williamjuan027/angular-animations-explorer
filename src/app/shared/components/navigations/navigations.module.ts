import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar';

const COMPONENTS = [ToolbarComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MatToolbarModule],
  exports: [...COMPONENTS],
})
export class NavigationsModule {}
