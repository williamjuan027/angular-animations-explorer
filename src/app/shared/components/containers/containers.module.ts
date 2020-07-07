import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card';
import { CardQuicklinkComponent } from './card-quicklink';
import { CardDemoSampleComponent } from './card-demo-sample';

const COMPONENTS = [
  CardComponent,
  CardQuicklinkComponent,
  CardDemoSampleComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FlexLayoutModule, MatCardModule, MatChipsModule],
  exports: [...COMPONENTS],
})
export class ContainersModule {}
