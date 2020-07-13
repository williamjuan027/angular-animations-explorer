import {
  trigger,
  style,
  animate,
  transition,
  animation,
} from '@angular/animations';

export const Fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
]);

export const Slide = animation([
  style({ transform: 'translate({{x}}px, {{y}}px)' }),
  animate('{{duration}}s', style({ transform: 'translate(0,0)' })),
]);
