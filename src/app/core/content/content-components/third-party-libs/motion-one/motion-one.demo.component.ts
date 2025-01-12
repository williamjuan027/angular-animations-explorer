import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { animate, Easing, AnimationGeneratorType } from 'motion';

@Component({
    imports: [CommonModule],
    selector: 'app-motion-one-demo',
    templateUrl: './motion-one.demo.component.html'
})
export class MotionOneDemoComponent {
  @ViewChild('box') box!: ElementRef;
  isAnimating = false;

  animateDefaultCard(): void {
    this._animateCard('easeInOut', 'keyframes');
  }

  animateSpringCard(): void {
    this._animateCard('linear', 'spring');
  }

  animateSequenceCard(): void {
    this.isAnimating = true;
    const sequence = [
      [this.box.nativeElement, { x: 100 }, { duration: 0.5 }],
      [this.box.nativeElement, { y: 100 }, { duration: 0.5 }],
      [this.box.nativeElement, { x: 0, y: 0 }, { duration: 1 }],
    ];
    animate(sequence as any)
      .then(() => {
        this.isAnimating = false;
      })
      .catch(() => {
        this.isAnimating = false;
      });
  }

  private _animateCard(ease: Easing | Easing[], type: AnimationGeneratorType): void {
    this.isAnimating = true;
    animate(this.box.nativeElement, { rotate: 180 }, { type, duration: 0.5, ease })
      .then(() => {
        animate(
          this.box.nativeElement,
          { rotate: 0 },
          { type, duration: 0.5, ease }
        )
          .then(() => {
            this.isAnimating = false;
          })
          .catch(() => {
            this.isAnimating = false;
          });
      })
      .catch(() => {
        this.box.nativeElement.rotate = 0;
        this.isAnimating = false;
      });
  }
}
