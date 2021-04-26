import { Component } from '@angular/core';

@Component({
  selector: 'app-popmotion-demo',
  templateUrl: './popmotion.demo.component.html',
  styleUrls: ['./popmotion.demo.component.scss'],
})
export class PopmotionDemoComponent {
  isEnabled = true;

  toggleIsEnabled(): void {
    this.isEnabled = !this.isEnabled;
  }
}
