import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryShake } from './query.animation';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-query-demo',
  templateUrl: './query.demo.component.html',
  animations: [QueryShake],
})
export class QueryDemoComponent {
  animation: 'default' | 'withLimit' | null = null;

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
