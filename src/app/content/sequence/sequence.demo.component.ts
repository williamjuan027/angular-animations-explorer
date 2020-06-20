import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sequence-demo',
  templateUrl: './sequence.demo.component.html',
  styleUrls: ['./sequence.demo.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ]),
  ],
})
export class SequenceDemoComponent {
  cardIsDisplayed = true;

  toggleCard(): void {
    this.cardIsDisplayed = !this.cardIsDisplayed;
  }
}
