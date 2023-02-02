import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

export const FadeSlideGrowKeyframe = [
  trigger('fadeSlideGrowKeyframe', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.5) translateY(50px)' }),
      animate(
        '500ms',
        keyframes([
          style({ opacity: 1, offset: 0.3 }),
          style({ transform: 'translateY(0)', offset: 0.6 }),
          style({ transform: 'scale(1)', offset: 1 }),
        ])
      ),
    ]),
    transition(':leave', [
      animate(
        '500ms',
        keyframes([
          style({ transform: 'scale(0.5)', offset: 0.3 }),
          style({ transform: 'scale(0.5) translateY(50px)', offset: 0.7 }),
          style({ opacity: 0, offset: 1 }),
        ])
      ),
    ]),
  ]),
];
