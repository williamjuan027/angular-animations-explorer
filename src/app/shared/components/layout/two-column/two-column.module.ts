import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TwoColumnComponent } from './two-column.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [TwoColumnComponent],
  exports: [TwoColumnComponent],
})
export class TwoColumnModule {}
