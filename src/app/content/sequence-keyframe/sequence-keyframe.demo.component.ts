import { Component } from '@angular/core';
import { FadeSlideGrowKeyframe } from './sequence-keyframe.animation';

@Component({
  selector: 'app-sequence-keyframe-demo',
  templateUrl: './sequence-keyframe.demo.component.html',
  styleUrls: ['./sequence-keyframe.demo.component.scss'],
  animations: [FadeSlideGrowKeyframe],
})
export class SequenceKeyframeDemoComponent {
  cardIsDisplayed = true;
  toggleCard(): void {
    this.cardIsDisplayed = !this.cardIsDisplayed;
  }
}
