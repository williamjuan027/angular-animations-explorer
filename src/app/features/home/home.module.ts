import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ContainersModule } from '@shared/components/containers';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HomeRoutingModule,
    ContainersModule,
  ],
})
export class HomeModule {}
