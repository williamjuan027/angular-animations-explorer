import {
  trigger,
  style,
  animate,
  transition,
  state,
} from '@angular/animations';

export const PulseAnimation = [
  trigger('pulseAnimation', [
    state('false', style({ transform: 'scale(1)' })),
    transition('false => true', [
      animate('200ms ease-in', style({ transform: 'scale(1.05)' })),
      animate('200ms ease-in', style({ transform: 'scale(0.95)' })),
      animate('200ms ease-in', style({ transform: 'scale(1.05)' })),
      animate('200ms ease-in', style({ transform: 'scale(1)' })),
    ]),
  ]),
];
