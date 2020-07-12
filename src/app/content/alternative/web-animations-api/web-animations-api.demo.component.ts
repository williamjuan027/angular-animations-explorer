import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-web-animations-api-demo',
  templateUrl: './web-animations-api.demo.component.html',
  styleUrls: ['./web-animations-api.demo.component.scss'],
})
export class WebAnimationsApiDemoComponent {
  @ViewChild('card') card: ElementRef;
  private animation: Animation;

  constructor() {}

  playAnimation(): void {
    this.animation = this.card.nativeElement.animate(
      this.getShakeAnimation(),
      this.getShakeAnimationTiming()
    );
  }

  stopAnimation(): void {
    if (this.animation) {
      this.animation.cancel();
      this.animation = null;
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
