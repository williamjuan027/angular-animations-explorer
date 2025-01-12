import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeSlideGrowKeyframe } from './sequence-keyframe.animation';

@Component({
    imports: [CommonModule],
    selector: 'app-sequence-keyframe-demo',
    templateUrl: './sequence-keyframe.demo.component.html',
    animations: [FadeSlideGrowKeyframe]
})
export class SequenceKeyframeDemoComponent {
  cardIsDisplayed = true;
  toggleCard(): void {
    this.cardIsDisplayed = !this.cardIsDisplayed;
  }
}
