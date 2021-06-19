import { Component } from '@angular/core';

@Component({
  selector: 'app-three-demo',
  templateUrl: './three.demo.component.html',
  styleUrls: ['./three.demo.component.scss'],
})
export class ThreeDemoComponent {
  onMeshAnimateReady(cube: THREE.Mesh) {
    // rotating the X and the Y axis 0.01 radian on every frame
    cube.rotation.x = cube.rotation.y += 0.01;
  }
}
