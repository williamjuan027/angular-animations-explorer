import { Component } from '@angular/core';
import { QueryShake } from './query.animation';

@Component({
  selector: 'app-query-demo',
  templateUrl: './query.demo.component.html',
  styleUrls: ['./query.demo.component.scss'],
  animations: [QueryShake],
})
export class QueryDemoComponent {
  animation: 'default' | 'withLimit' = null;

  animate(): void {
    this.animation = 'default';
  }

  animateWithLimit(): void {
    this.animation = 'withLimit';
  }

  animationDone(): void {
    this.animation = null;
  }
}
