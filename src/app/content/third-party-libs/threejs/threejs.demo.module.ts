import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThreeCoreModule } from '@angular-three/core';
import { ThreeBoxBufferGeometryModule } from '@angular-three/core/geometries';
import { ThreeMeshBasicMaterialModule } from '@angular-three/core/materials';
import { ThreeMeshModule } from '@angular-three/core/meshes';
import { ButtonsModule } from '@shared/components/buttons';
import { ContainersModule } from '@shared/components/containers';
import { ThreejsDemoComponent } from './threejs.demo.component';

@NgModule({
  declarations: [ThreejsDemoComponent],
  exports: [ThreejsDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    ThreeCoreModule,
    // ThreeBoxBufferGeometryModule,
    // ThreeMeshBasicMaterialModule,
    // ThreeMeshModule,
    FlexLayoutModule,
    ContainersModule,
    ButtonsModule,
  ],
})
export class ThreejsDemoModule {
  static entry = ThreejsDemoComponent;
}
