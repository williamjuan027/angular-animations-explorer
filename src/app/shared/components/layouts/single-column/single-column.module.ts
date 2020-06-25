import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SingleColumnComponent } from './single-column.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [SingleColumnComponent],
  exports: [SingleColumnComponent],
})
export class SingleColumnModule {}
