import { Component } from '@angular/core';

@Component({
  selector: 'app-state-change-demo',
  templateUrl: './state-change-popmotion.demo.component.html',
  styleUrls: ['./state-change-popmotion.demo.component.scss'],
})
export class StateChangePopmotionDemoComponent {
  isEnabled = true;

  toggleIsEnabled(): void {
    this.isEnabled = !this.isEnabled;
  }
}
