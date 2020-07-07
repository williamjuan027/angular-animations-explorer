import { Component } from '@angular/core';
import { CardDemoSampleData } from './card-demo-sample.data';

@Component({
  selector: 'app-card-demo-sample',
  templateUrl: './card-demo-sample.component.html',
  styleUrls: ['./card-demo-sample.component.scss'],
})
export class CardDemoSampleComponent {
  currentCard =
    CardDemoSampleData[this.getRandomInt(CardDemoSampleData.length)];

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
