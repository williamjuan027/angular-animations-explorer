import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { CardQuicklinkComponent } from './card-quicklink';

const COMPONENTS = [CardComponent, CardQuicklinkComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MatCardModule],
  exports: [...COMPONENTS],
})
export class ContainersModule {}
