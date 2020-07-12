import { Component } from '@angular/core';
import { EnabledStateChange } from './state-change.animation';

@Component({
  selector: 'app-state-change-demo',
  templateUrl: './state-change.demo.component.html',
  styleUrls: ['./state-change.demo.component.scss'],
  animations: [EnabledStateChange],
})
export class StateChangeDemoComponent {
  isEnabled = true;

  toggleIsEnabled(): void {
    this.isEnabled = !this.isEnabled;
  }
}
