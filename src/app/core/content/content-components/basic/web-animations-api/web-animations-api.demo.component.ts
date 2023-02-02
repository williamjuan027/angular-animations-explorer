import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-web-animations-api-demo',
  templateUrl: './web-animations-api.demo.component.html',
  styleUrls: ['./web-animations-api.demo.component.scss'],
})
export class WebAnimationsApiDemoComponent {
  @ViewChild('card') card!: ElementRef;
  private animation: Animation | undefined = undefined;

  constructor() {}

  playAnimation(): void {
    this.animation = this.card.nativeElement.animate(
      this.getShakeAnimation(),
      this.getShakeAnimationTiming()
    );
  }

  stopAnimation(): void {
    if (this.animation != null) {
      this.animation.cancel();
      this.animation = undefined;
    }
  }

  private getShakeAnimation() {
    return [
      { transform: 'rotate(0)' },
      { transform: 'rotate(2deg)' },
      { transform: 'rotate(-2deg)' },
      { transform: 'rotate(0)' },
    ];
  }

  private getShakeAnimationTiming() {
    return {
      duration: 300,
      iterations: 3,
    };
  }
}
