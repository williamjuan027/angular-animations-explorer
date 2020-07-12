import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-demo',
  templateUrl: './inline.demo.component.html',
  styleUrls: ['./inline.demo.component.scss'],
})
export class InlineDemoComponent {
  isScaledDown = false;

  toggleScale(): void {
    this.isScaledDown = !this.isScaledDown;
  }

  getScaleDown(index: number): string {
    return `scale(${1 - (index + 1) / 10})`;
  }

  getResetScale(): string {
    return 'scale(1)';
  }
}
