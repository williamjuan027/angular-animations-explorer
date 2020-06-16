import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ContainerModule } from '@shared/components/container';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ContainerModule],
})
export class HomeModule {}
