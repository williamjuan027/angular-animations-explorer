import { Component } from '@angular/core';
import {
  trigger,
  style,
  state,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-state-change-demo',
  templateUrl: './state-change.demo.component.html',
  styleUrls: ['./state-change.demo.component.scss'],
  animations: [
    trigger('enabledStateChange', [
      state(
        'default',
        style({
          opacity: 1,
        })
      ),
      state(
        'disabled',
        style({
          opacity: 0.5,
        })
      ),
      transition('* => *', [
        animate(
          '200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          style({ transform: 'scale(1.03)' })
        ),
        animate(
          '200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          style({ transform: 'scale(1)' })
        ),
      ]),
    ]),
  ],
})
export class StateChangeDemoComponent {
  isEnabled = false;

  toggleIsEnabled(): void {
    this.isEnabled = !this.isEnabled;
  }
}
