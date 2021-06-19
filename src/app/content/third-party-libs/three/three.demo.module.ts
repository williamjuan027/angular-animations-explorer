import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  ThreeCoreModule,
  ThreeColorPipeModule,
  ThreeFogPipeModule,
  ThreeMathConstantPipeModule,
} from '@angular-three/core';
import {
  ThreeMeshBasicMaterialModule,
  ThreeMeshLambertMaterialModule,
  ThreeMeshNormalMaterialModule,
  ThreeMeshPhongMaterialModule,
  ThreeMeshStandardMaterialModule,
} from '@angular-three/core/materials';
import {
  ThreeMeshModule,
  ThreeInstancedMeshModule,
} from '@angular-three/core/meshes';
import {
  ThreeGridHelperModule,
  ThreePointLightHelperModule,
  ThreeSpotLightHelperModule,
} from '@angular-three/core/helpers';
import { ThreeStatsModule } from '@angular-three/core/stats';
import { ThreeBoxBufferGeometryModule } from '@angular-three/core/geometries';
import { ButtonsModule } from '@shared/components/buttons';
import { ContainersModule } from '@shared/components/containers';
import { ThreeDemoComponent } from './three.demo.component';

@NgModule({
  declarations: [ThreeDemoComponent],
  exports: [ThreeDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    FlexLayoutModule,
    ThreeCoreModule,
    ThreeColorPipeModule,
    ThreeFogPipeModule,
    ThreeMathConstantPipeModule,
    ThreeBoxBufferGeometryModule,
    ThreeMeshBasicMaterialModule,
    ThreeMeshLambertMaterialModule,
    ThreeMeshNormalMaterialModule,
    ThreeMeshPhongMaterialModule,
    ThreeMeshStandardMaterialModule,
    ThreeMeshModule,
    ThreeInstancedMeshModule,
    ThreeStatsModule,
    ThreeGridHelperModule,
    ThreePointLightHelperModule,
    ThreeSpotLightHelperModule,
    ContainersModule,
    ButtonsModule,
  ],
})
export class ThreeDemoModule {
  static entry = ThreeDemoComponent;
}
