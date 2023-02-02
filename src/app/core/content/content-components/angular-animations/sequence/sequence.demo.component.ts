import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FadeGrowSequence,
  FadeGrowGroup,
  FadeGrowStagger,
} from './sequence.animation';

type TSequence = 'SEQUENCE' | 'GROUP' | 'STAGGER' | null;

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sequence-demo',
  templateUrl: './sequence.demo.component.html',
  animations: [FadeGrowSequence, FadeGrowGroup, FadeGrowStagger],
})
export class SequenceDemoComponent {
  sequenceSelected: TSequence = 'SEQUENCE';
  sequenceChangeQueued: TSequence = 'SEQUENCE';

  selectSequence(sequence: TSequence): void {
    this.sequenceSelected = null;
    this.sequenceChangeQueued = sequence;
  }

  animationDone(): void {
    this.sequenceSelected = this.sequenceChangeQueued;
  }
}
