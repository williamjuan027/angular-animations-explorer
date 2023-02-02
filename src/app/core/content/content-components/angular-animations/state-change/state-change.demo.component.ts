import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnabledStateChange } from './state-change.animation';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-state-change-demo',
  templateUrl: './state-change.demo.component.html',
  animations: [EnabledStateChange],
})
export class StateChangeDemoComponent {
  isEnabled = true;

  toggleIsEnabled(): void {
    this.isEnabled = !this.isEnabled;
  }
}
