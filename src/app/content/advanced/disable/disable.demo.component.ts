import { Component } from '@angular/core';
import { PulseAnimation } from './disable.animation';

@Component({
  selector: 'app-disable-demo',
  templateUrl: './disable.demo.component.html',
  styleUrls: ['./disable.demo.component.scss'],
  animations: [PulseAnimation],
})
export class DisableDemoComponent {
  isAnimating = false;
  isDisabled = false;

  toggleIsDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }

  playAnimation(): void {
    this.isAnimating = true;
  }

  animationDone(): void {
    this.isAnimating = false;
  }
}
