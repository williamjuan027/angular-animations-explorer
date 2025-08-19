import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { animate, EasingParam, JSAnimation } from 'animejs';

@Component({
  standalone: true,
  selector: 'app-animejs-demo',
  templateUrl: './animejs.demo.component.html',
})
export class AnimejsDemoComponent {
  @ViewChild('box') box!: ElementRef;
  isAnimating = signal<boolean>(false)
  isPaused = signal<boolean>(false)

  private _animeAnimation: JSAnimation | undefined = undefined

  animateDefaultCard(): void {
    this._animateCard('easeInOut');
  }

  animateSpringCard(): void {
    this._animateCard('outBounce');
  }

  playPause(): void {
    if (!this._animeAnimation) {
      return;
    }
    if (this.isAnimating()) {
      if (this.isPaused()) {
        this._animeAnimation.resume()
        this.isPaused.set(false)
      } else {
        this._animeAnimation.pause()
        this.isPaused.set(true)
      }
    }
  }
  
  private _animateCard(ease: EasingParam): void {
    if (this.isAnimating()) {
      return
    }
    this.isAnimating.set(true)
    this.isPaused.set(false)
    this._animeAnimation = animate(this.box.nativeElement, { 
      x: 250,
      duration: 400,
      ease: 'out'
    })
    this._animeAnimation
      .then(() => {
        this._animeAnimation = animate(
          this.box.nativeElement, {
            x: 0,
            duration: 500,
            ease,
          }
        )
        this._animeAnimation
          .then(() => {
            this.isAnimating.set(false)
          })
          .catch(() => {
            this.isAnimating.set(false)
          });
      })
      .catch(() => {
        this.box.nativeElement.x = 0;
        this.isAnimating.set(false)
      });
  }  
}
