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
    trigger('favoriteStateChange', [
      state(
        'default',
        style({
          color: '#9FA8DA',
        })
      ),
      state(
        'favorite',
        style({
          color: '#1A237E',
        })
      ),
      transition('* => *', [
        animate(
          '200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          style({ transform: 'scale(1.2)' })
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
  list: { name: string; isFavorite: boolean }[] = [
    { name: 'First', isFavorite: false },
    { name: 'Second', isFavorite: false },
    { name: 'Third', isFavorite: false },
    { name: 'Fourth', isFavorite: false },
    { name: 'Fifth', isFavorite: false },
  ];
  constructor() {}

  toggleFavorite(index: number): void {
    console.log('index', index);
    this.list[index].isFavorite = !this.list[index].isFavorite;
  }
}
