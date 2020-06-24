import {
  trigger,
  style,
  animate,
  transition,
  query,
  sequence,
  group,
  stagger,
} from '@angular/animations';

const ExitStyle = { opacity: 0, transform: 'scale(0.8)' };
const EnterStyle = { opacity: 1, transform: 'scale(1)' };

export const FadeGrowSequence = [
  trigger('fadeGrowSequence', [
    transition(':enter', [
      query(':enter', [
        style(ExitStyle),
        sequence([
          animate('300ms ease-in', style({ opacity: 1 })),
          animate('300ms', style({ transform: 'scale(1)' })),
        ]),
      ]),
    ]),
    transition(':leave', [
      query(':leave', [
        sequence([
          animate('300ms ease-in', style({ opacity: 0 })),
          animate('300ms', style({ transform: 'scale(0.8)' })),
        ]),
      ]),
    ]),
  ]),
];

export const FadeGrowGroup = [
  trigger('fadeGrowGroup', [
    transition(':enter', [
      query(':enter', [
        style(ExitStyle),
        // different eases
        group([
          animate('200ms ease-in', style({ opacity: 1 })),
          animate('500ms', style({ transform: 'scale(1)' })),
        ]),
      ]),
    ]),
    transition(':leave', [
      query(':leave', [
        group([
          animate('200ms ease-in', style({ opacity: 0 })),
          animate('500ms', style({ transform: 'scale(0.8)' })),
        ]),
      ]),
    ]),
  ]),
];
export const FadeGrowStagger = [
  trigger('fadeGrowStagger', [
    transition(':enter', [
      query(':enter', [
        style(ExitStyle),
        stagger('100ms', [animate('500ms', style(EnterStyle))]),
      ]),
    ]),
    transition(':leave', [
      query(':leave', [
        stagger('-100ms', [animate('500ms', style(ExitStyle))]),
      ]),
    ]),
  ]),
];
