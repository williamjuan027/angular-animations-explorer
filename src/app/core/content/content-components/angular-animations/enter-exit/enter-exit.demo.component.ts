import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    imports: [CommonModule],
    selector: 'app-enter-exit-demo',
    templateUrl: './enter-exit.demo.component.html',
    animations: [
        trigger('fadeSlideInOut', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(10px)' }),
                animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
            transition(':leave', [
                animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
            ]),
        ]),
    ]
})
export class EnterExitDemoComponent {
  cardIsDisplayed = true;

  toggleCard(): void {
    this.cardIsDisplayed = !this.cardIsDisplayed;
  }
}
