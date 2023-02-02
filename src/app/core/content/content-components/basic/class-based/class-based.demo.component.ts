import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-class-based-demo',
  templateUrl: './class-based.demo.component.html',
  styleUrls: ['./class-based.demo.component.scss'],
})
export class ClassBasedDemoComponent {
  animationType: 'KEYFRAME' | 'TRANSFORM' | null = null;

  selectKeyframeAnimation(): void {
    this.animationType = 'KEYFRAME';
  }

  selectTransformAnimation(): void {
    this.animationType = 'TRANSFORM';
  }

  resetAnimation(): void {
    this.animationType = null;
  }
}
