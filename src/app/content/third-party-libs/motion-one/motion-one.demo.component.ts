import { Component, ViewChild, ElementRef } from '@angular/core';
import { animate, spring, timeline, CustomEasing, Easing } from 'motion';

@Component({
  selector: 'app-motion-one-demo',
  templateUrl: './motion-one.demo.component.html',
  styleUrls: ['./motion-one.demo.component.scss'],
})
export class MotionOneDemoComponent {
  @ViewChild('box') box: ElementRef;
  isAnimating = false;

  animateDefaultCard(): void {
    this._animateCard('ease-in-out');
  }

  animateSpringCard(): void {
    this._animateCard(spring());
  }

  animateSequenceCard(): void {
    this.isAnimating = true;
    const sequence = [
      [this.box.nativeElement, { x: 100 }, { duration: 0.5 }],
      [this.box.nativeElement, { y: 100 }, { duration: 0.5 }],
      [this.box.nativeElement, { x: 0, y: 0 }, { duration: 1 }],
    ];
    timeline(sequence as any)
      .finished.then(() => {
        this.isAnimating = false;
      })
      .catch(() => {
        this.isAnimating = false;
      });
  }

  private _animateCard(easing: CustomEasing | Easing): void {
    this.isAnimating = true;
    animate(this.box.nativeElement, { rotate: 180 }, { duration: 0.5, easing })
      .finished.then(() => {
        animate(
          this.box.nativeElement,
          { rotate: 0 },
          { duration: 0.5, easing }
        )
          .finished.then(() => {
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
