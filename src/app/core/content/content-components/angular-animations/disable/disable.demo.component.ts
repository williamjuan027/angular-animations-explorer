import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PulseAnimation } from './disable.animation';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-disable-demo',
  templateUrl: './disable.demo.component.html',
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
