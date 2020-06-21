import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CardComponent } from './card/card.component';
import { CardQuicklinkComponent } from './card-quicklink';
import { FlexLayoutModule } from '@angular/flex-layout';

const COMPONENTS = [CardComponent, CardQuicklinkComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FlexLayoutModule, MatCardModule, MatChipsModule],
  exports: [...COMPONENTS],
})
export class ContainersModule {}
