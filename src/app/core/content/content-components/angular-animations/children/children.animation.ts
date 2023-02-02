import {
  trigger,
  style,
  animate,
  transition,
  query,
  animateChild,
} from '@angular/animations';

export const Container = [
  trigger('container', [
    transition(':enter, :leave', [
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
];

export const EnterExitLeft = [
  trigger('enterExitLeft', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-200px)' }),
      animate(
        '300ms ease-in',
        style({ opacity: 1, transform: 'translateX(0)' })
      ),
    ]),
    transition(':leave', [
      animate(
        '300ms ease-in',
        style({ opacity: 0, transform: 'translateX(-200px)' })
      ),
    ]),
  ]),
];

export const EnterExitRight = [
  trigger('enterExitRight', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(200px)' }),
      animate(
        '300ms ease-in',
        style({ opacity: 1, transform: 'translateX(0)' })
      ),
    ]),
    transition(':leave', [
      animate(
        '300ms ease-in',
        style({ opacity: 0, transform: 'translateX(200px)' })
      ),
    ]),
  ]),
];
