import { Component } from '@angular/core';
import { Fade, Slide } from './reuse.animation';
import { trigger, useAnimation, transition } from '@angular/animations';

type TReuseMethod = 'TRIGGER' | 'ANIMATION_REFERENCE_DATA';
@Component({
  selector: 'app-reuse-demo',
  templateUrl: './reuse.demo.component.html',
  styleUrls: ['./reuse.demo.component.scss'],
  animations: [
    Fade,
    trigger('slide', [
      transition(
        ':enter',
        useAnimation(Slide, {
          params: {
            x: 0,
            y: 50,
            duration: 0.3,
          },
        })
      ),
    ]),
  ],
})
export class ReuseDemoComponent {
  reuseMethodSelected: TReuseMethod = 'TRIGGER';
  private reuseMethodQueued: TReuseMethod = this.reuseMethodSelected;

  selectReuseMethod(reuseMethod: 'TRIGGER' | 'ANIMATION_REFERENCE_DATA'): void {
    this.reuseMethodSelected = null;
    this.reuseMethodQueued = reuseMethod;
  }

  animationDone(): void {
    this.reuseMethodSelected = this.reuseMethodQueued;
  }
}
